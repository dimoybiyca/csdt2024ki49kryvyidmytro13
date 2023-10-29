import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from 'src/app/main/store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { MessagesComponent } from './components/list/messages/messages.component';
import { EffectsModule } from '@ngrx/effects';
import { SendMessageEffect } from 'src/app/main/store/effects/send-message.effect';

const routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, ListComponent, MessagesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('main', mainReducers),
    EffectsModule.forFeature([SendMessageEffect]),
  ],
})
export class MainModule {}
