import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem, IonInput, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import {NavController, AlertController} from '@ionic/angular';
import { addIcons } from "ionicons";
import { personOutline, mailOutline, lockClosedOutline, logInOutline, eye, eyeOff } from "ionicons/icons";
// import { mailOutline } from "ionicons/icons";
// import { lockClosedOutline } from "ionicons/icons";
// import { logInOutline } from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCardContent, IonCardTitle,
    IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email: string= '';
  password: string = '';
  passwordType: string = 'password';
  constructor(
    private navCtrl : NavController,
    private alertController: AlertController
  ) {
   addIcons({personOutline,mailOutline,lockClosedOutline,logInOutline, eye, eyeOff}); }



   async login(){
    if (!this.email || !this.password) {
      // Verificar si los campos están vacíos
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();


     }else if(this.email == 'ives' && this.password == '2004ed'){
        this.navCtrl.navigateForward('/home');
      }else{
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Correo electrónico o contraseña incorrectos.',
          buttons: ['OK']
        });

        await alert.present();
      }

    }
    togglePasswordVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }

  ngOnInit() {
  }

}
