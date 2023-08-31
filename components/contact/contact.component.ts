import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Contact Us';

  backgroundImage: string;

  buttonLink: boolean;

  contactHeaderTitle: string;

  contactHeaderText: string;

  bookAppointmentLink: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/office-entrance.jpg' + ')';
    this.buttonLink = true;
    this.contactHeaderTitle = 'Contact Our Office';
    this.contactHeaderText = 'Mid-Valley Chiropractic Center provides many chiropractic techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
    this.bookAppointmentLink = 'https://practice.chirotouch.com/portal/MidValleyChiropracticCenter#/book-appointment';
  }

}
