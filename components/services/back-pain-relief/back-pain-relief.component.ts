import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Content } from 'src/app/domain/content';

@Component({
  selector: 'app-back-pain-relief',
  templateUrl: './back-pain-relief.component.html',
  styleUrls: ['./back-pain-relief.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BackPainReliefComponent implements OnInit {
  title = 'Back Pain Relief';

  backgroundImage: string;

  buttonLink: boolean;

  backHeaderTitle: string;

  backHeaderText: string;

  content: Content[] = [
    new Content(
      'Chiropractic for Back Pain Relief',
      'Of the millions of Americans who visit a chiropractor annually, 35% are seeking relief from back pain. If you\'re among those who suffer from back pain, chiropractic care can treat common lower back pain through manual, non-invasive spinal manipulation, and can also provide pain relief for joints, muscles, ligaments and tendons. Rather than treating the symptoms of back pain, our Salem chiropractor Dr. Rivas treats the cause with manual manipulation which helps realign the spine, improve mobility, and restore range of motion within the spine.',
    ),
    new Content(
      'What is Spinal Manipulation?',
      'Using a hands-on approach, our chiropractors perform a variety of adjustments through a controlled, sudden force to individual vertebrae that are misaligned or are functioning irregularly. This high velocity thrust movement when applied to a vertebra can help restore joint function and reduce inflammation and pain without the need for medication or invasive surgery.',
    ),
    new Content(
      'Back Pain Treatments',
      `While the focus on spinal adjustments and alignments is the most common in treating back pain, other treatments and procedures that our chiropractic team can perform include a variety of therapeutic measures:
      <ul class="back-pain__list">
      <li class="back-pain__list-item">Strength Exercises</li>
      <li class="back-pain__list-item">Stretching Therapy</li>
      <li class="back-pain__list-item">EMS (Electric Muscle Stimulation Therapy)</li>
      <li class="back-pain__list-item">Hot/Cold Therapies</li>
      <li class="back-pain__list-item">Massages</li>
      <li class="back-pain__list-item">Proper Posture Education</li>
      <li class="back-pain__list-item">Nutritional Counseling</li>
      <li class="back-pain__list-item">Whole Body Balancing Vibration Therapy</li>
    </ul>`,
    ),
    new Content(
      'Contact Us',
      `If you are suffering from back pain and would like to meet with Dr. Rivas to discuss a treatment plan for back pain relief, schedule by calling <strong>503-315-8448</strong>.`,
    ),
  ];

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/back-pain.jpg' + ')';
    this.buttonLink = false;
    this.backHeaderTitle = 'Spinal Adjustments and Back Pain Relief';
    this.backHeaderText = 'Mid-Valley Chiropractic Center provides many chiropractic techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
