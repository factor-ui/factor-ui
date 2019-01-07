import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AppComponent } from './app.component';
import { InputsModule } from 'factor-inputs';
import { AuthModule } from 'factor-auth';
import { DesignerModule } from 'factor-designer';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { HomeComponent } from './home/home.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StyleGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot({ icon: { collection: 'factoricons-regular' } }),
    AuthModule.forRoot({ tokenUrl: 'token' }),
    DesignerModule,
    InputsModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
