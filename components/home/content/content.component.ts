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
      'Our team understands the stress and pain patients are in following personal and auto injury accidents. We analyze, diagnose, and create an individualized treatment plan for whiplash and soft tissue injuries. We will thoroughly explain your treatment and update your insurance agency on your behalf.',
    ),
    new Content(
      'Work Related Injuries',
      'Most work injuries are caused by overuse and repetitive stress injuries. Overtime, small tasks done with poor posture can lead to acute and chronic pain, which can result in reduced worker productivity, lost time from work, disability, and an inability to perform job tasks.',
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
