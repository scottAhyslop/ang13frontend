import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesComponent } from '../devices/devices.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})


export class DeviceComponent implements OnInit {

  @ViewChild(DevicesComponent)
  device!: DevicesComponent;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

   }

  @Output()
    onGetDevice: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params['deviceId']);

    });
  }

  showDevice(deviceId: number){
    alert(`The user selected Device: ${deviceId}`);
  }

}
