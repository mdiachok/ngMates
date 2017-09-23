import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

export const firebaseConfig = {
  apiKey: "AIzaSyABKjpHd7u2JyXPlgn9gtswliKh5fB59x4",
  authDomain: "hobbit-3c587.firebaseapp.com",
  databaseURL: "https://hobbit-3c587.firebaseio.com",
  projectId: "hobbit-3c587",
  storageBucket: "hobbit-3c587.appspot.com",
  messagingSenderId: "688486551372"
};

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'landing3-dsl'}),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
