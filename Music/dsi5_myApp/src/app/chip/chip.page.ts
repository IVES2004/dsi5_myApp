import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon, IonLabel, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, closeCircle, pin } from 'ionicons/icons';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  standalone: true,
  imports: [IonChip, IonLabel, IonIcon, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChipPage implements OnInit {

  constructor() {
    addIcons({ close, closeCircle, pin });
  }

  ngOnInit() {
  }

}
