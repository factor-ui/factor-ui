import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { InputsModule } from 'factor-inputs';
import { NavigationModule } from 'factor-navigation';
import { CommonModule as FactorCommonModule } from 'factor-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    SidenavComponent,
    CommonComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot({ icon: { collection: 'factoricons-regular' } }),
    InputsModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
