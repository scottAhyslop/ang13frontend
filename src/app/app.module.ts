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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DevicesComponent,
    DeviceComponent,
    SearchComponent,
    GenericListComponent,
    MenuMaterialComponent
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
