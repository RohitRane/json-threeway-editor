/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { JSONFormEditorComponent } from './json-editor/json-form-editor';
import { JSONTreeEditorComponent } from './json-editor/json-tree-editor';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: JSONFormEditorComponent
  },
  {
    path:'tree',
    component:JSONTreeEditorComponent
  }
];

export const routing = RouterModule.forRoot(routes);
