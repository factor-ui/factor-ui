import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { InputsModule } from 'factor-inputs';
import { NavigationModule } from 'factor-navigation';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { DesignerModule } from 'factor-designer';
import { UtilsModule } from 'factor-utils';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    CommonComponent,
    HomeComponent,
    InfiniteScrollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot({ icon: { collection: 'factoricons-regular' } }),
    UtilsModule.forRoot({ storage: { encryptionSecret: 'test' } }),
    InputsModule,
    NavigationModule,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
