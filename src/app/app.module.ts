import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD_sTFYkaGZu79yUnrsLvvvigaFJwcNN5Q",
  authDomain: "test-work-12a17.firebaseapp.com",
  databaseURL: "https://test-work-12a17.firebaseio.com",
  storageBucket: "test-work-12a17.appspot.com",
  messagingSenderId: "289641279368"
};

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
