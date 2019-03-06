import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AppComponent } from './app.component';
import { InputsModule } from 'factor-inputs';
import { AuthModule } from 'factor-auth';
import { DesignerModule } from 'factor-designer';
import { UtilsModule } from 'factor-utils';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { HomeComponent } from './home/home.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { IconComponent } from './icon/icon.component';
import { InputsComponent } from './inputs/inputs.component';
import { ImageComponent } from './image/image.component';
import { RippleComponent } from './ripple/ripple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StyleGuideComponent,
    IconComponent,
    InputsComponent,
    ImageComponent,
    RippleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot({ icon: { collection: 'factoricons-regular' } }),
    AuthModule.forRoot({ tokenUrl: 'token' }),
    UtilsModule,
    DesignerModule,
    InputsModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
