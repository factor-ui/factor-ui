import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { EditorComponent } from 'factor-designer';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'common',
    component: CommonComponent,
  },
  {
    path: 'infinite-scroll',
    component: InfiniteScrollComponent,
  },
  {
    path: 'designer/editor',
    component: EditorComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
