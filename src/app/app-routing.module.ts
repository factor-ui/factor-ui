import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditorComponent } from 'factor-designer';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { InputsComponent } from './inputs/inputs.component';
import { Sidenav1Component } from './layouts/sidenav1/sidenav1.component';
import { RippleComponent } from './ripple/ripple.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'designer/editor',
    component: EditorComponent,
  },
  {
    path: 'components/common/icon',
    component: IconComponent,
  },
  {
    path: 'components/common/image',
    component: ImageComponent,
  },
  {
    path: 'components/navigation/sidenav',
    component: Sidenav1Component,
  },
  {
    path: 'components/inputs',
    component: InputsComponent,
  },
  {
    path: 'style-guide',
    component: StyleGuideComponent,
  },
  {
    path: 'ripple',
    component: RippleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
