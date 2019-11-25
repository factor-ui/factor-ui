import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputsModule } from 'factor-inputs';
import { NavigationModule } from 'factor-navigation';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { DesignerModule } from 'factor-designer';
import { UtilsModule } from 'factor-utils';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    HomeComponent,
    InfiniteScrollComponent,
    NavbarComponent,
    ListComponent,
    MessagesComponent,
    FilesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot({ icon: { path: 'assets/factoricons/symbols', collection: 'factoricons-regular' } }),
    UtilsModule.forRoot({ storage: { encryptionSecret: 'test' } }),
    NavigationModule,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
