import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainImg: string;
  mainVideo: string;
  constructor() {
    this.mainImg = '../assets/images/main-img.jpg',
    this.mainVideo = '../assets/media/office.mp4'
  }

  ngOnInit() {
  }

}
