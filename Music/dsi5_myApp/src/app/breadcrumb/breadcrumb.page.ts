import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBreadcrumbs, IonLabel, IonBreadcrumb } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, film, flash, home } from 'ionicons/icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.page.html',
  styleUrls: ['./breadcrumb.page.scss'],
  standalone: true,
  imports: [IonBreadcrumb, IonLabel, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBreadcrumbs]
})
export class BreadcrumbPage implements OnInit {

  constructor() {
    addIcons({ camera, film, flash, home });
   }


  ngOnInit() {
  }

}
