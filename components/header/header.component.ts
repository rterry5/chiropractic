import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  buttonLink: boolean;

  @Input()
  headerTitle: string;

  @Input()
  headerText: string;

  bookAppointmentLink: string;

  constructor() { }

  ngOnInit(): void {
    this.bookAppointmentLink = 'https://practice.chirotouch.com/portal/MidValleyChiropracticCenter#/book-appointment';
  }

}
