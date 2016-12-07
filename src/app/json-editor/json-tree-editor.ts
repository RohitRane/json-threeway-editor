import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var JSONEditor: any;

@Component({
    selector: 'json-tree-editor',
    template: `<h1>Json Tree Editor</h1>
  <div id="editor-holder"></div>`
})
export class JSONTreeEditorComponent {

    constructor() {
        
    }
}
