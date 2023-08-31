import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'Meet Dr. Rivas';

  backgroundImage: string;

  buttonLink: boolean;

  aboutHeaderTitle: string;

  aboutHeaderText: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/office.jpg' + ')';
    this.buttonLink = true;
    this.aboutHeaderTitle = 'Mid-Valley Chiropractic Center';
    this.aboutHeaderText = 'Mid-Valley Chiropractic Center provides a variety of techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
