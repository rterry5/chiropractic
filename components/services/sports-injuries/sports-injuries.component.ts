import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-injuries',
  templateUrl: './sports-injuries.component.html',
  styleUrls: ['./sports-injuries.component.scss']
})
export class SportsInjuriesComponent implements OnInit {
  title = 'Sports Chiropractic in Salem';

  backgroundImage: string;

  buttonLink: boolean;

  sportsHeaderTitle: string;

  sportsHeaderText: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/chiro-room.jpg' + ')';
    this.buttonLink = false;
    this.sportsHeaderTitle = 'Sports Injuries and Pain Relief';
    this.sportsHeaderText = 'Mid-Valley Chiropractic Center provides diversified techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
