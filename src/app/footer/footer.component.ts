import {Component, OnInit} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class Footer implements OnInit {

  scrollUp(event): void {
    event.preventDefault();

    let getHref: string = event.currentTarget.attributes.href.value;
    let getElem: any = document.querySelector(getHref);
    let elemPosition: number = getElem.offsetTop;
    let positionTop: number;
    let step: number;

    let runScrolling: any = setInterval(() => {
      positionTop = window.pageYOffset;
      step = Math.round(getElem.getBoundingClientRect().top/15);

      if (step > -1 && step < 1) {
        positionTop = elemPosition;
        clearInterval(runScrolling);
      } else if (positionTop > elemPosition) {
        scrollBy(0, step);
        this.scrollUp;
      } else if (positionTop < elemPosition) {
        scrollBy(0, step);
        this.scrollUp;
      }
    }, 7);
  }

  constructor() {
  }


  ngOnInit() {
  }

}
