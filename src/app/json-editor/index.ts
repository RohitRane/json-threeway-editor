import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { JSONFormEditorComponent } from './json-form-editor';
import { JSONTreeEditorComponent } from './json-tree-editor';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        JSONFormEditorComponent,
        JSONTreeEditorComponent
    ],
    exports: [
        JSONFormEditorComponent,
        JSONTreeEditorComponent
    ]
})
export class JSONEditorModule { }
