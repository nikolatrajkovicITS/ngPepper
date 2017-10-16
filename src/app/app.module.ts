import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAPAj5GPtQLStWNKGyBktS7gde2I5ve8tk",
  authDomain: "pepper-b0ef2.firebaseapp.com",
  databaseURL: "https://pepper-b0ef2.firebaseio.com",
  projectId: "pepper-b0ef2",
  storageBucket: "pepper-b0ef2.appspot.com",
  messagingSenderId: "689300631953"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
