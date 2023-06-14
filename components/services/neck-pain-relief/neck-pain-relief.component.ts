import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/domain/content';

@Component({
  selector: 'app-neck-pain-relief',
  templateUrl: './neck-pain-relief.component.html',
  styleUrls: ['./neck-pain-relief.component.scss']
})
export class NeckPainReliefComponent implements OnInit {
  title = 'Neck Pain Relief';

  backgroundImage: string;

  buttonLink: boolean;

  neckHeaderTitle: string;

  neckHeaderText: string;

  content: Content[] = [
    new Content(
      'Neck Pain and Chiropractic',
      `Is it painful moving your head from side to side? Do you experience neck stiffness, or headaches from tension in your neck? Because the neck, also known as the cervical spine, can move in many different directions, it can be more susceptible to pain or injury. Neck pain can stem from a variety of different factors and has common causes including:
      <ul class="neck-pain__list">
      <li class="neck-pain__list-item">Extended Sitting</li>
      <li class="neck-pain__list-item">Auto Accidents/Whiplash</li>
      <li class="neck-pain__list-item">Sports Injuries</li>
      <li class="neck-pain__list-item">Poor Posture</li>
      <li class="neck-pain__list-item">Arthritis</li>
      <li class="neck-pain__list-item">Nerve Compression</li>
      <li class="neck-pain__list-item">Muscle Strains</li>
      </ul>
      <p class="neck-pain__paragraph">Chiropractic care for neck pain offers relief through non-invasive and drug-free treatment that can relieve discomfort, reduce inflammation, improve range of motion, and improve flexibility. Whether your neck pain occurred from sleeping wrong, a strenuous work day, or an injury or accident, our chiropractor in Salem can help determine the cause of pain and create a plan of treatment for pain relief.</p>`,
    ),
    new Content(
      'Neck Adjustments for Pain Relief',
      `Neck pain is one of the most common conditions that patients are treated for by a chiropractor. Depending on the nature of the pain and condition, several different treatment options are available. Cervical (neck) manipulation or spinal adjustments are most common to treat neck pain, which can help restore normal joint functions and alignment. Other chiropractic techniques can be incorporated into your treatment for neck pain based on evaluation include:
      <ul class="neck-pain__list">
      <li class="neck-pain__list-item">Soft Tissue Therapy</li>
      <li class="neck-pain__list-item">Stretching Exercises</li>
      <li class="neck-pain__list-item">Ultrasound Therapy</li>
      <li class="neck-pain__list-item">Therapeutic Massage</li>
      <li class="neck-pain__list-item">Instrument-assisted Manipulation</li>
      <li class="neck-pain__list-item">EMS (Electric Muscle Stimulation Therapy)</li>
    </ul>`,
    ),
    new Content(
      'Contact Us',
      `Rather than treating the symptoms of neck pain with pain relief medicine, we treat the pain at the source. To contact our chiropractic office in Salem and to set up your complimentary 10-minute consultation with Dr. Rivas, call us at <strong>503-315-8448</strong> or send us a message!`,
    ),
  ];

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/chiro-patient.jpg' + ')';
    this.buttonLink = false;
    this.neckHeaderTitle = 'Neck Pain Relief';
    this.neckHeaderText = 'Mid-Valley Chiropractic Center provides diversified techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
