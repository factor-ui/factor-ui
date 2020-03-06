import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputsModule } from 'factor-inputs';
import { NavigationModule } from 'factor-navigation';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { DesignerModule } from 'factor-designer';
import { UtilsModule, CacheInterceptor } from 'factor-utils';
import { AuthModule } from 'factor-auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { FilesComponent } from './files/files.component';
import { CacheComponent } from './cache/cache.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    HomeComponent,
    InfiniteScrollComponent,
    NavbarComponent,
    ListComponent,
    MessagesComponent,
    FilesComponent,
    CacheComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FactorCommonModule.forRoot(
      { icon: { path: 'assets/factoricons/symbols', collection: 'factoricons-regular' }
    }),
    UtilsModule.forRoot(
      {
        cache: {
          urls: [
            'assets/cachable-url.json'
          ]
        }
      }
    ),
    NavigationModule,
    DesignerModule,
    AuthModule.forRoot({type:'oauth'})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
