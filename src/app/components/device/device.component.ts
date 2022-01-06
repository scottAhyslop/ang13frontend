import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DevicesComponent } from '../devices/devices.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})


export class DeviceComponent implements OnInit {

  @ViewChild(DevicesComponent)
  device!: DevicesComponent;

  constructor() { }

  @Output()
    onGetDevice: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  showDevice(deviceId: number){
    alert(`The user selected Device: ${deviceId}`);
  }

}
