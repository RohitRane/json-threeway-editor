import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var JSONEditor: any;

@Component({
    selector: 'json-form-editor',
    template: `<h1>Json From Editor</h1>
  <div id="editor-holder"></div>`
})
export class JSONFormEditorComponent {

    constructor() {
        require(["../../assets/jdorn-json-editor/dist/jsoneditor.js"], function (_d3) {
            debugger;
            let options = {
                schema: {
                    "type": "object",
                    "properties": {
                        "address": {
                            "type": "object",
                            "properties": {
                                "streetAddress": {
                                    "type": "string"
                                },
                                "city": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "streetAddress",
                                "city"
                            ]
                        },
                        "phoneNumber": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "location": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "location",
                                    "code"
                                ]
                            }
                        }
                    },
                    "required": [
                        "address",
                        "phoneNumber"
                    ]
                },
                theme: 'bootstrap3',
                disable_edit_json: true,
                disable_collapse: true,
                disable_properties: true
            }
            const element = document.getElementById('editor-holder');
            let editor = new JSONEditor(element, options);
            // ...
        });
    }
}
