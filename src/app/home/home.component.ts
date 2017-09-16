import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainImg: string;
  mainVideo: string;

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.mainImg = '../assets/images/main-img.jpg',
      this.mainVideo = '../assets/media/office.mp4',

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
    form.reset();
    console.log(name)
  }

  ngOnInit() {
  }
}

