export class ChiroService {

  public title: string;
  public imagePath: string;
  public description: string;

  constructor(title: string, image: string, desc: string) {
    this.title = title;
    this.imagePath = image;
    this.description = desc;
  }
}
