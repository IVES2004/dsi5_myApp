import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DatePage implements OnInit {

  constructor() { }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  ngOnInit() {
  }

}
