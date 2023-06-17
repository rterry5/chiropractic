import { Component, Input, OnInit } from '@angular/core';
import { ChiroService } from 'src/app/domain/chiro-service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input()
  service: ChiroService[];

  constructor() { }

  ngOnInit(): void {
  }

}
