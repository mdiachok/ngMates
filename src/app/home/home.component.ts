import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  innerWidth: any;

  mainImg: string;
  mainVideo: string;
  showSuccessAlert = false;

  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public af: AngularFireDatabase) {
    this.mainImg = '../assets/images/main-img.jpg';
    this.mainVideo = '../assets/media/office.mp4';

    this.innerWidth = (window.screen.width);
      this.items = af.list('/messages', {
        query: {
          limitToLast: 50
        }
      });
  }

  Send(desc: {}) {
    this.items.push({message: desc});
    this.msgVal = '';
  }

  onSubmit(form: NgForm) {
    this.Send(form.value);
    this.showSuccessAlert = true;
    setTimeout(() => { this.showSuccessAlert = false}, 3500);
  }


 ngOnInit() {

 }



}

