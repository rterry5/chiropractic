import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Content } from 'src/app/domain/content';

@Component({
  selector: 'app-auto-accidents',
  templateUrl: './auto-accidents.component.html',
  styleUrls: ['./auto-accidents.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AutoAccidentsComponent implements OnInit {
  title = 'Auto Accident Injury';

  backgroundImage: string;

  buttonLink: boolean;

  autoHeaderTitle: string;

  autoHeaderText: string;

  content: Content[] = [
    new Content(
      'Chiropractor for Auto Accidents',
      `When you are involved in a car accident, sometimes injury is not obvious immediately following an auto accident. In some cases, it can take days or weeks before you begin experiencing car accident injuries like whiplash or neck pain, making it more difficult to seek relief when the symptoms appear. If you have been in a car accident, don\'t wait until you start feeling pain before seeking treatment, seeks a chiropractor for auto accident injuries.
      <p class="auto-accidents__paragraph">Immediate chiropractic care can help realign the spine, reduce inflammation, and improve range of motion when it comes to car accident injuries that result in:</p>
      <ul class="auto-accidents__list">
        <li class="auto-accidents__list-item">Headaches</li>
        <li class="auto-accidents__list-item">Neck Pain</li>
        <li class="auto-accidents__list-item">Back Pain</li>
        <li class="auto-accidents__list-item">Shoulder Pain</li>
        <li class="auto-accidents__list-item">Body Stiffness</li>
        <li class="auto-accidents__list-item">Soft-tissue Injuries</li>
        <li class="auto-accidents__list-item">Herniated Disc</li>
        <li class="auto-accidents__list-item">Sprains and Strains</li>
      </ul>`,
    ),
    new Content(
      'How Does Chiropractic Care Help With Auto Injuries?',
      `<p class="auto-accidents__paragraph">
      <span class="auto-accidents__paragraph--italic">Chiropractic reduces scar tissue:</span> Scar tissue can form inside the body as a natural response to injury. This can lead to body stiffness, and can even make it difficult to move because of the pain.</p>
    <p class="auto-accidents__paragraph">
      <span class="auto-accidents__paragraph--italic">Chiropractic can restore range of motion:</span> With spinal manipulation, chiropractic adjustments will mobilize your spine to help avoid chronic, long-term pain.</p>
    <p class="auto-accidents__paragraph">
      <span class="auto-accidents__paragraph--italic">Chiropractic can restore range of motion:</span> With spinal manipulation, chiropractic adjustments will mobilize your spine to help avoid chronic, long-term pain.</p>
    <p class="auto-accidents__paragraph">
      <span class="auto-accidents__paragraph--italic">Chiropractic care is drug-free pain relief:</span> Many pain relief medications are addictive, and only treat the symptoms, not the overall problem, whereas chiropractic for auto injuries addresses injuries at the source.</p>`,
    ),
    new Content(
      'Contact Us',
      `If you are suffering from back pain and would like to meet with Dr. Rivas to discuss a treatment plan for back pain relief, schedule a complimentary 10-minute consultation with our chiropractor in Salem by calling
      <strong>503-315-8448</strong> or by sending us a message.`,
    ),
  ];
  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'url(' + 'assets/images/auto-accident.jpg' + ')';
    this.buttonLink = false;
    this.autoHeaderTitle = 'Chiropractic for Auto Accident Injuries';
    this.autoHeaderText = 'Mid-Valley Chiropractic Center provides diversified techniques to treat chronic pain, headaches, disc disorders, sports injuries, and auto accident injuries';
  }

}
