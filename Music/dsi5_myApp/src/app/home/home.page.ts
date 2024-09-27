
// import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent, IonActionSheet, IonButton } from '@ionic/angular/standalone';
// import { addIcons } from "ionicons";

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
//   standalone: true,
//   imports: [IonButton, IonActionSheet, IonHeader, IonToolbar, IonTitle, IonContent],
// })
// export class HomePage {
//   constructor() {}
//   public actionSheetButtons = [
//     {
//       text: 'Eliminar',
//       role: 'destructive',
//       data: {
//         action: 'delete',
//       },
//     },
//     {
//       text: 'Compartir',
//       data: {
//         action: 'share',
//       },
//     },
//     {
//       text: 'Cancelar',
//       role: 'cancel',
//       data: {
//         action: 'cancel',
//       },
//     },
//   ];
// }


import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import {NavController} from '@ionic/angular';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

  standalone: true,

  imports: [IonicModule],

})

export class HomePage {


  constructor(private navCtrl : NavController) {}

  navigateToUsuarios() {
    this.navCtrl.navigateForward('/usuarios');
  }



}
