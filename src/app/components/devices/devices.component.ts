import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

/**
 *
 */

export class DevicesComponent implements OnInit {

  constructor() {

    var devices;

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deviceSmartPhone = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-phone' viewBox='0 0 16 16'>" +
  "<path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'/>"+
  "<path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/>"+
  "</svg>"

  deviceSmartPhonePath01 ="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z";

  deviceSmartPhonePath02 ="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z";

  devices = [
    {
      DeviceId:1,
      DeviceName: "My Lovely iPad",
      Temperature: 34.5,
      DeviceIconPath: "bi bi-phone",
      DeviceOSIconPath: "iOS",
      DeviceType:"Tablet",
      DeviceOS: "iOS",
      DeviceStatus: "OPERATIONAL",
      TimeInUse: "1,3,14,56"
    },
    {
      DeviceId:2,
      DeviceName: "Dad's Phone",
      Temperature: 68.5,
      DeviceIconPath: "Phone",
      DeviceOSIconPath: "Android",
      DeviceType: "Phone",
      DeviceOS: "Android",
      DeviceStatus: "OVERHEATING",
      TimeInUse: "16,24,46,2"
    },
    {
      DeviceId: 3,
      DeviceName: "Mom's laptop",
      Temperature: 14.5,
      DeviceIconPath: "Laptop",
      DeviceOSIconPath: "Windows",
      DeviceType: "laptop",
      DeviceOS: "Windows",
      DeviceStatus: "COOLING",
      TimeInUse: "29,41,37,42"
    }
  ];











}



