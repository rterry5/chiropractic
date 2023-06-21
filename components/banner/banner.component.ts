import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bookAppointmentLink: string;

  constructor() { }

  ngOnInit(): void {
    this.bookAppointmentLink = 'https://practice.chirotouch.com/portal/MidValleyChiropracticCenter#/book-appointment';
  }

}
