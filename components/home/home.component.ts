import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  backgroundImage: string;

  buttonLink: boolean;

  homeHeaderTitle: string;

  homeHeaderText: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/header.jpg' + ')';
    this.buttonLink = true;
    this.homeHeaderTitle = 'Mid-Valley Chiropractic Center';
    this.homeHeaderText = 'Mid-Valley Chiropractic Center provides diversified techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
