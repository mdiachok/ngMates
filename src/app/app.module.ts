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
import { WangularComponent } from './wangular/wangular.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAcwWFz0x1xPGlVRm6yUfF06kT_nqnx0es",
  authDomain: "ngmates-63ad3.firebaseapp.com",
  databaseURL: "https://ngmates-63ad3.firebaseio.com",
  projectId: "ngmates-63ad3",
  storageBucket: "ngmates-63ad3.appspot.com",
  messagingSenderId: "946715291870"
};

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    HomeComponent,
    NavigationComponent,
    WangularComponent
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
