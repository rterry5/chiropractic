import { Component, OnInit } from '@angular/core';
import { ChiroService } from 'src/app/domain/chiro-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  backgroundImage: string;

  buttonLink: boolean;

  servicesHeaderTitle: string;

  servicesHeaderText: string;

  chiroServices: ChiroService[] = [
    new ChiroService(
      'Sports Injuries',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Neck Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Lower Back Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Rib Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Joint Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Nerve Pain',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Arthritis',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Sprain/Strain Injuries',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Headaches',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Scoliosis',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Numbness, tingling, weakness',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    new ChiroService(
      'Pregnancy-Related Discomfort',
      'assets/images/skelly.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),

  ];

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/office.jpg' + ')';
    this.buttonLink = true;
    this.servicesHeaderTitle = 'Mid-Valley Chiropractic Center';
    this.servicesHeaderText = 'Mid-Valley Chiropractic Center provides a variety of techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
