import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeviceComponent } from './components/device/add-device/add-device.component';
import { DeleteDeviceComponent } from './components/device/delete-device/delete-device.component';
import { DeviceComponent } from './components/device/device.component';
import { UpdateDeviceComponent } from './components/device/update-device/update-device.component';
import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
/* import { SearchComponent } from './components/search/search.component'; */

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'devices', component: DevicesComponent },
  { path: 'device/:deviceId', component: DeviceComponent },
  { path: 'delete-device/:deviceId', component: DeleteDeviceComponent },
  { path: 'add-device/:deviceId', component: AddDeviceComponent },
  { path: 'update-device/:deviceId', component: UpdateDeviceComponent },
  //catch-all to 404 page, keep last for functionality
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
