import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 13 Front-End';

  handleSingleDevice(deviceId: number){
    alert(`User has selected Device ${deviceId}`);
  }
}


