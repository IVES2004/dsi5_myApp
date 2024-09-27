import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// import { IonContent, IonHeader, IonTitle, IonToolbar, IonActionSheet } from '@ionic/angular/standalone';

import { IonicModule, ActionSheetController, NavController } from '@ionic/angular';




@Component({

  selector: 'app-usuarios',

  templateUrl: './usuarios.page.html',

  styleUrls: ['./usuarios.page.scss'],

  standalone: true,

  imports: [ IonicModule ],

  // imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})

export class UsuariosPage implements OnInit {

  // public actionSheetButtons = [
  //   {
  //     text: 'Editar',
  //     role: 'destructive',
  //     data: {
  //       action: 'edit',
  //     },
  //   },
  //   {
  //     text: 'Eliminar',
  //     role: 'destructive',
  //     data: {
  //       action: 'delete',
  //     },
  //   },

  // ];


  constructor(private actionSheetCtrl: ActionSheetController,
    private navCtrl : NavController,
  ) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Lista de opciones",
      buttons: [
        {
          text: "Editar",
          handler: () => {
            alert("Seleccionaste editar")
          }
        },
        {
          text: "Eliminar",
          handler: () => {
            alert("Seleccionaste eliminar")
          }
        },
      ]
    });
    await actionSheet.present();
  }




  ngOnInit() {

  }


  navigateToAgregarUsuarios() {
    this.navCtrl.navigateForward('/agregarusuarios');
  }


}


