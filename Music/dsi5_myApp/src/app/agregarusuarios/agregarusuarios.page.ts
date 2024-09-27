import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem, IonInput, IonLabel, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  ReactiveFormsModule  } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.page.html',
  styleUrls: ['./agregarusuarios.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCardContent, IonCardTitle,
    IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, ReactiveFormsModule]
})
export class AgregarusuariosPage {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController, private navCtrl : NavController) {
    this.userForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });
  }

  async onSubmit() {
    if (this.userForm.valid) {
      const { nombres, apellidos, direccion, telefono } = this.userForm.value;
      console.log(`Nombres: ${nombres}, Apellidos: ${apellidos}, Dirección: ${direccion}, Teléfono: ${telefono}`);

      // Aquí podrías agregar la lógica para guardar el usuario

      const toast = await this.toastController.create({
        message: 'Usuario agregado exitosamente',
        duration: 2000,
        position: 'top',
      });
      await toast.present();
      this.userForm.reset();
    }
  }

  navigateBack() {
    this.navCtrl.navigateForward('/usuarios');
  }

}

