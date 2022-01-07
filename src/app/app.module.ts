import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { SearchComponent } from './components/search/search.component';
import { GenericListComponent } from './components/utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//module for Angular Material imports
import { MaterialModule } from './material/material.module';
import { MenuMaterialComponent } from './components/menu-material/menu-material.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddDeviceComponent } from './components/device/add-device/add-device.component';
import { DeleteDeviceComponent } from './components/device/delete-device/delete-device.component';
import { UpdateDeviceComponent } from './components/device/update-device/update-device.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DevicesComponent,
    DeviceComponent,
    SearchComponent,
    GenericListComponent,
    MenuMaterialComponent,
    TestComponentComponent,
    HomeComponent,
    NotFoundComponent,
    AddDeviceComponent,
    DeleteDeviceComponent,
    UpdateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  exports: [NavBarComponent,
            DeviceComponent,
            DevicesComponent,
            SearchComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
