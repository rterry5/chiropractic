import { Component, OnInit } from '@angular/core';
import { ChiroService } from 'src/app/domain/chiro-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  chiroServices: ChiroService[] = [
    new ChiroService(
      'Auto Accidents',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Sports Injuries',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Back Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Kinesiology',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Theraputic Ultrasound',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Adjustments & Manipulation',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
