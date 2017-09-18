import {Component, OnInit, HostListener} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  scrolling(event): void {
    event.preventDefault();

    let getHref: string = event.currentTarget.attributes.href.value;
    let getElem: any = document.querySelector(getHref);
    let elemPosition: number;
    let positionTop: number;
    let step: number;

    let runScrolling: any = setInterval(() => {
      elemPosition = getElem.offsetTop;
      positionTop = window.pageYOffset;

      if (step >= -10 && step <= 10) {
        window.scrollTo(0, elemPosition);
        clearInterval(runScrolling);
      } else {
        scrollBy(0, step/10);
        step = Math.round(getElem.getBoundingClientRect().top);
        this.scrolling;
      }
    }, 7);
  }


  activeClassArray: string [] = ['#video-block', '#about', '#sills', '#portfolio', '#team', '#contact'];
  getActiveElements: {activeElem: any; position: number}[];

  @HostListener("window:scroll", [])
  private onWindowScroll = () => {

    this.getActiveElements = this.activeClassArray.map(function (a) {
      let elem: any = document.querySelector(a);
      let activeElem = document.querySelector(`a[href="${a}"]`);
      let position: number = elem.offsetTop;
      return {activeElem, position}
    });

    let positionTop: number = window.pageYOffset + 78;
    if (this.getActiveElements[0].position > positionTop) {
      let home = document.querySelector('a[href="#top"]');
      home.classList.add('active');
    } else {
      this.getActiveElements.forEach(function (item, index, array) {
        if (positionTop >= item.position) {
          array.forEach(function (deactive) {
            deactive.activeElem.classList.remove('active');
          });
          item.activeElem.classList.add('active');
        }
      })
    }
  };

  constructor() {
  }

  ngOnInit() {

  }

}
