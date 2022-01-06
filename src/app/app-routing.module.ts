import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
/* import { SearchComponent } from './components/search/search.component'; */

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'devices', component: DevicesComponent },
  { path: 'device/:deviceId', component: DeviceComponent },
  //catch-all to 404 page, keep last for functionality
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
