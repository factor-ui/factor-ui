import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { InputsModule } from 'factor-inputs';
import { DialogsModule } from 'factor-dialogs';
import { NavigationModule } from 'factor-navigation';
import { UtilsModule } from 'factor-utils';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from './common/avatar/avatar.component';
import { ImageComponent } from './common/image/image.component';
import { IconComponent } from './common/icon/icon.component';
import { ProgressComponent } from './common/progress/progress.component';
import { RatingComponent } from './inputs/rating/rating.component';
import { FilePickerComponent } from './inputs/file-picker/file-picker.component';
import { MessageComponent } from './dialogs/message/message.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { ListComponent } from './navigation/list/list.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FilesComponent } from './utils/files/files.component';
import { CacheComponent } from './utils/cache/cache.component';
import { StorageComponent } from './utils/storage/storage.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ImageComponent,
    IconComponent,
    ProgressComponent,
    RatingComponent,
    FilePickerComponent,
    MessageComponent,
    ListComponent,
    ToolbarComponent,
    NavbarComponent,
    FilesComponent,
    CacheComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FactorCommonModule.forRoot({ icon: { path: 'assets/factoricons/symbols', collection: 'factoricons-regular' } }),
    HighlightModule,
    DialogsModule,
    InputsModule,
    NavigationModule,
    MatButtonModule,
    HttpClientModule,
    UtilsModule.forRoot({ storage: { encryptionSecret: 'Factor' }})
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
