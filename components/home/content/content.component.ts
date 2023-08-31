import { Component, OnInit } from '@angular/core';
import { ChiroService } from 'src/app/domain/chiro-service';
import { Content } from 'src/app/domain/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  content: Content[] = [
    new Content(
      'Auto Accident Injuries',
      'Our team understands the stress and pain patients are in following personal and auto injury accidents. We analyze, diagnose, and create an individualized treatment plan for whiplash and soft tissue injuries.',
    ),
    new Content(
      'Hablamos Español',
      'Nosotros le recomendamos que se comuniquen a nuestra oficina quiropráctica de Salem por teléfono, o mándenos un mensaje electrónico. Si tiene algunas preguntas o comentarios, por favor, no dude en ponerse en contacto. Siempre estamos felices de saber de ustedes. ¡Muchas gracias!',
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
