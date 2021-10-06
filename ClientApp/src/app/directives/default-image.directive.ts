import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[src]',
  host: {
      '[src]': 'checkPath(src)',
      '(error)': 'onError()'
  }
})
export class DefaultImageDirective {
  @Input() src: string;
  public defaultImg: string = 'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2019/12/11/2019-12-11-mountain-day-featured-01.jpg';

  constructor() { }

  public onError() {
      this.src = this.defaultImg;
  }

  public checkPath(src) {
      return src ? src : this.defaultImg;
  }
}
