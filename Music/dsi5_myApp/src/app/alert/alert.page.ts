import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonButton, IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor() { }

  alertButtons = ['Action'];

  ngOnInit() {
  }

}
