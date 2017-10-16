import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cuisines = ['c1', 'c2', 'c3'];

  constructor(af: AngularFire) {
    af.database.list('cuisines').subscribe(x => {                // this list return an obsrv, we can subscribe on it
      this.cuisines = x;
      console.log(this.cuisines);
    })               
  }
}
sssssssssssssssss