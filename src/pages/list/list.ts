import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import arrry from "../../pages/home/home"

declare  var firebase;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  arr = new Array();


  obj= this.navParams.get('obj') ;

  temp=arrry[0];

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController , public toastCtrl: ToastController) {
    


    firebase.database().ref('bookings/'+this.temp).on('value', (data: any) => {
      var a = data.val();

      if(a !==null){

        var keys: any = Object.keys(a);
        console.log(keys);
      for (var i = 0; i < keys.length; i++){
              var k = keys[i];
  
              let obj = {
                checkIn: a[k].checkIn ,
                checkOut:a[k].checkOut ,
                roomType:a[k].roomType ,
                key:k
  
        }
  
          this.arr.push(obj)
    }
    console.log(this.arr);
    } 
      
      else {
        const toast = this.toastCtrl.create({
          message: 'YOU DONT HAVE ANY BOOKINGS',
          duration: 3000
        });
        toast.present();

       
      }
     
      
      
     
      
})
    
}


delete(a){
  this.arr=[];
   return firebase.database().ref('bookings/'+this.temp).child(a).remove()
}

update(a){

  alert(a)
  const prompt = this.alertCtrl.create({
    title: 'Login',
    message: "Enter a name for this new album you're so keen on adding",
    inputs: [
      {
        name: 'checkIn',
        placeholder: 'Check out' ,
        type:"date"
      },

      {
        name: 'checkOut',
        placeholder: 'Check out' ,
        type:"date"
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          console.log('Saved clicked');

          if(data.checkIn != "" && data.checkOut != ""){
            
           // alert("there is something")

            this.arr=[];
            var update = {
            checkIn:data.checkIn ,
            checkOut:data.checkOut
          }
          return firebase.database().ref('bookings/'+this.temp).child(a).update(update) ;

         }else if(data.checkIn != ""){
          this.arr=[];
          var updates = {
            checkIn:data.checkIn ,
            
          }
          return firebase.database().ref('bookings/'+this.temp).child(a).update(updates) ;

         }else if(data.checkOut != ""){
          this.arr=[];
          var updatess = {
           
            checkOut:data.checkOut
          }
          return firebase.database().ref('bookings/'+this.temp).child(a).update(updatess) ;


         }

         
         
        }
        
          
          
        
          

          

            
          
          
         

      
      
      }
    ]
  });
  prompt.present();

}
 
  
 

}
