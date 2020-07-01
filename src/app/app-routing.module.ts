import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarComponent } from './common/avatar/avatar.component';
import { ImageComponent } from './common/image/image.component';
import { IconComponent } from './common/icon/icon.component';
import { ProgressComponent } from './common/progress/progress.component';
import { RatingComponent } from './inputs/rating/rating.component';
import { FilePickerComponent } from './inputs/file-picker/file-picker.component';
import { MessageComponent } from './dialogs/message/message.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { ListComponent } from './navigation/list/list.component';
import { FilesComponent } from './utils/files/files.component';
import { CacheComponent } from './utils/cache/cache.component';
import { StorageComponent } from './utils/storage/storage.component';

const routes: Routes = [
  { path: 'common/icon', component: IconComponent },
  { path: 'common/image', component: ImageComponent },
  { path: 'common/avatar', component: AvatarComponent },
  { path: 'common/progress', component: ProgressComponent },
  { path: 'inputs/rating', component: RatingComponent },
  { path: 'inputs/file-picker', component: FilePickerComponent },
  { path: 'dialogs/message', component: MessageComponent },
  { path: 'navigation/toolbar', component: ToolbarComponent },
  { path: 'navigation/list', component: ListComponent },
  { path: 'utils/files', component: FilesComponent },
  { path: 'utils/cache', component: CacheComponent },
  { path: 'utils/storage', component: StorageComponent },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then(mod => mod.SamplesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
