import { useState } from 'react'
import logo from './logo.svg'
import { SampleBase } from './components/TestWordProcess';
import './App.css'
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel, CharacterFormatProperties, DocumentEditorComponent, DocumentEditor } from '@syncfusion/ej2-react-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

DocumentEditorContainerComponent.Inject(Toolbar, DocumentEditorComponent, DocumentEditor,);

export default class App extends SampleBase {
  public container: DocumentEditorContainerComponent = new DocumentEditorContainerComponent({});

  constructor() {
    super(...arguments);

    // Add event listener for requestNavigate event to customize hyperlink navigation functionality.
    this.requestNavigate = (args) => {

      if (args.linkType !== 'Bookmark') {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
          link += '#' + args.localReference;
        }
        //Navigate to the specified URL.
        window.open(link);
        args.isHandled = true;
        alert(link)
      }
    };
  }


  public rendereComplete(): void {

    this.container.documentEditor.setDefaultCharacterFormat({ fontFamily: 'Verdana', fontSize: 20 });
    this.container.documentEditor.openBlank();
    this.container.documentEditor.spellChecker.languageID = 1033 //LCID of "en-us";
    this.container.documentEditor.spellChecker.removeUnderline = false;
    this.container.documentEditor.spellChecker.allowSpellCheckAndSuggestion = true;
    this.container.documentEditor.spellChecker.enableOptimizedSpellCheck = true;

    this.container.documentEditor.requestNavigate = (args) => {
      // navigation meth
      if (args.linkType !== 'Bookmark') {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
          link += '#' + args.localReference;
        }

        if (link == "http://localhost:3000/d/1") {
          this.ondoc1Click();
        } else if (link == "http://localhost:3000/d/2") {
          this.ondoc2Click();
        }

      }
    };

    

  }
  onCreate(): void {
    // creating Custom Options
   
  }
  render() {

    let toolItem: CustomToolbarItemModel = {
      prefixIcon: "e-de-ctnr-lock",
      tooltipText: "Disable Image",
      text: "Disable Image",
      id: "Custom"
    };

    let items = [
      toolItem,
      'New',
      'Open',
      'Separator',
      "Undo",
      "Redo",
      "Separator",
      "Image",
      "Table",
      "Hyperlink",
      "Bookmark",
      "Comments",
      "TableOfContents",
      "Separator",
      "Header",
      "Footer",
      "PageSetup",
      "PageNumber",
      "Break",
      "Separator",
      "Find",
      "Separator",
      "LocalClipboard",
      "RestrictEditing"
    ];

    return (
      <div>
        <button onClick={this.ondoc1Click.bind(this)}>Doc 1</button>
        <button onClick={this.ondoc2Click.bind(this)} >Doc 2</button>

        <DocumentEditorContainerComponent
          ref={scope => {
            this.container = scope;
          }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          id="container"
          height={'700px'}
          toolbarItems={items}
          enableToolbar={true}
          requestNavigate={this.requestNavigate.bind(this)}
          enableSpellCheck={true}
        
        />
      </div>

    );
  }

  

  ondoc1Click() {
    let sfdt = `{
        "sections": [
            {
                "blocks": [
                    {
                        "inlines": [
                            {
                                "characterFormat": {
                                    "bold": true,
                                    "italic": true
                                },
                                "text": " -  Document 1"
                               
                            }
                        ]
                    }
                ],
                "headersFooters": {
                }
            }
        ]
    }`;


    setTimeout(() => {
      //Open the document in Document Editor.
      this.container.documentEditor.open(sfdt);
      this.container.documentEditor.editor.insertHyperlink("http://localhost:3000/d/2", "Go-to-doc-2")
    });
  }

  ondoc2Click() {
    let sfdt = `{
  "sections": [
      {
          "blocks": [
              {
                  "inlines": [
                      {
                          "characterFormat": {
                              "bold": true,
                              "italic": true
                          },
                          "text": " -  Document 2"
                         
                      }
                  ]
              }
          ],
          "headersFooters": {
          }
      }
  ]
}`
    setTimeout(() => {
      //Open the document in Document Editor.
      this.container.documentEditor.open(sfdt);
      this.container.documentEditor.editor.insertHyperlink("http://localhost:3000/d/1", "Go-to-doc-1")
    });
  }


}
