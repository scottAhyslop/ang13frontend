import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})


export class DeviceComponent implements OnInit {

  constructor() { }

  @Output()
    onGetDevice: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  showDevice(deviceId: number){
    alert(`The user selected Device: ${deviceId}`);
  }

}
