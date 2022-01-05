import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Purpose: to populate a list of devices with sample data to show icon, device name and status and an information button link to a display page of the selected device
 * Initially done with sample data, later, data will be retrieved via service from .NET 6 Web api
 * svg params have been acquired and added to methods to stock 2D array with names and svg data for both devices and OSs...
 */

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {



  devices:any = [];
  constructor() {
  //devices sample data
    this.devices = [
      {
        DeviceId:1,
        DeviceName: "My Lovely iPad",
        Temperature: 34.5,
        DeviceIconPath: "assets/tablet.png",
        DeviceOSIconPath: "",
        DeviceType:"Tablet",
        DeviceOS: "iOS",
        DeviceStatus: "OPERATIONAL",
        TimeInUse: "1,3,14,56"
      },
      {
        DeviceId:2,
        DeviceName: "Dad's Phone",
        Temperature: 68.5,
        DeviceIconPath: "assets/phone.png",
        DeviceOSIconPath: "",
        DeviceType: "Phone",
        DeviceOS: "Android",
        DeviceStatus: "OVERHEATING",
        TimeInUse: "16,24,46,2"
      },
      {
        DeviceId: 3,
        DeviceName: "Mom's laptop",
        Temperature: 14.5,
        DeviceIconPath: "assets/monitor.png",
        DeviceOSIconPath: "",
        DeviceType: "Desktop",
        DeviceOS: "Windows",
        DeviceStatus: "COOLING",
        TimeInUse: "29,41,37,42"
      }
    ];
  }//end constructor

 @Output()
 onGetDevice: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {



  }//end ngOnInit()

  //info button function
  getSingleDevice(deviceId: number){

    const device = this.devices.find((d: { DeviceId: number; }) => d.DeviceId === deviceId);
    //not working yet
    /* var device = this.devices.Array().prototype.some((d: { DeviceId: number; }) => d.DeviceId === deviceId); */
    this.onGetDevice.emit(device);
    //TESTING ONLY: Remove for production
    alert(`Device with an Id of: ${device.DeviceId} was emitted to device.component`);
  }//getSingleDevice
}

/* code graveyard ;) */
//DELETE FOR PRODUCTION
//sort through the two lists and pick out a device icon that matches the deviceType

/*  for (let i = 0; i < devices.length ; i++) {
   devices[i].DeviceIconPath = deviceIcons.filter(device => device.find(     //'DeviceType' === devices[i].DeviceIconPath)).toString(); */
/*
      for (var [index, device] of devices.entries()) {

        device.DeviceIconPath = deviceIcons.filter(x => x.DeviceType == device.DeviceType).toString();

      }
 */
/*
 getDeviceOSAndTypeIcons()
    {
      //load up OS Icons with types

      // const osIcons:any[][]
      var osIcons = this.getOSIcons();

      //load up Device Icons with types
      var deviceIcons = this.getDeviceIcons();

    }//end getDeviceOSAndTypeIcons

     getOSIcons(){
      const osIcons:any[][] = [];
      var deviceOS = ["iOS", "Windows", "Android"];
      var deviceOSIconPath = [ "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='apple' class='svg-inline--fa fa-apple' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'></path></svg>", "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='windows' class='svg-inline--fa fa-windows' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><'path fill='currentColor' d='M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z'></path></svg>", "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='android' class='svg-inline--fa fa-android' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M420.5 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.94-83a10 10 0 1 0 -17.27-10h0l-48.54 84.07a301.3 301.3 0 0 0 -246.6 0L116.2 64.45a10 10 0 1 0 -17.27 10h0l47.94 83C64.53 202.2 8.24 285.5 0 384H576c-8.24-98.45-64.54-181.8-146.9-226.6'></path></svg>"];

      for (var [index, icon] of deviceOS.entries()) {
        osIcons[index].push(deviceOS[index], deviceOSIconPath[index]);
        }

        return osIcons;
    }//end getOSIcons

    getDeviceIcons(){
      const deviceIcons:any[][] = [];
      var deviceIcon = ["Phone", "Tablet", "Desktop"];
      //str.replace(/^"(.+(?="$))"$/, '$1'); //removes string quotes when displayed in html
      //svg for device types phone, tablet, desktop
      var deviceIconPath = ["<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1280.000000pt' height='720.000000pt' viewBox='0 0 1280.000000 720.000000'      preserveAspectRatio='xMidYMid meet' <g transform='translate(0.000000,720.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path d='M5268 6630 c-79 -10 -169 -48 -217 -93 -44 -42 -87 -133 -101 -215 -7 -48 -10 -820 -8 -2722 l3 -2655 26 -67 c14 -36 40 -84 57 -105 37 -47 126 -96 200 -112 37 -8 392 -11 1174 -11 1204 0 1178 -1 1279 50 51 27 114 101 141 169 l23 56 3 1193 c2 1043 4 1192 17 1192 23 0 22 735 0 744 -12 4 -15 27 -15 121 0 96 3 115 15 115 13 0 15 27 15 180 0 152 -2 180 -15 180 -12 0 -15 111 -17 853 -3 802 -4 855 -22 903 -47 131 -148 205 -306 224 -100 12 -2149 12 -2252 0z m2482 -3030 l0 -2400 -1355 0 -1355 0 0 2400 0 2400 1355 0 1355 0 0 -2400z /></g></svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-tablet' viewBox='0 0 16 16'><path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z'/><path d=M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/> </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-display' viewBox='0 0 16 16'><path d='M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z'/></svg>"];
      //svg for icons...apple, ms, android TESTING:  Move to sep class later

      //list of Device Types and Icons
      for (var [index, device] of deviceIcon.entries()) {
      deviceIcons[index].push([deviceIcon[index], deviceIconPath[index]]);
      }
      return deviceIcons;
    }//end getDeviceIcons
*/
