import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonIcon, IonFabButton, IonFabList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';

@Component({
  selector: 'app-floatingactionbutton',
  templateUrl: './floatingactionbutton.page.html',
  styleUrls: ['./floatingactionbutton.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFabButton, IonIcon, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FloatingactionbuttonPage implements OnInit {

  constructor() {
    addIcons({ chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe });
  }



  ngOnInit() {
  }

}
