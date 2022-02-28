import { useState } from 'react'
import logo from './logo.svg'
import { SampleBase } from './components/TestWordProcess';
import './App.css'
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel } from '@syncfusion/ej2-react-documenteditor';


DocumentEditorContainerComponent.Inject(Toolbar);

export default class App extends SampleBase {
  public container: DocumentEditorContainerComponent | undefined;
  requestNavigate: (args: any) => void;

  constructor() {
    super(...arguments);
    // Add event listener for requestNavigate event to customize hyperlink navigation functionality
    this.requestNavigate = (args) => {
        if (args.linkType !== 'Bookmark') {
            let link = args.navigationLink;
            if (args.localReference.length > 0) {
                link += '#' + args.localReference;
            }
            //Navigate to the specified URL.
            window.open(link);
            args.isHandled = true;
        }
    };
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
      <DocumentEditorContainerComponent
        ref={scope => {
          this.container = scope;
        }}
        id="container"
        height={'700px'}
        toolbarItems={items}
        toolbarClick={this.onToolbarClick.bind(this)}
        enableToolbar={true}

      />

    );
  }

  onToolbarClick = (args: ClickEventArgs): void => {
    switch (args.item.id) {
      case "Custom":
        //Disable image toolbar item.
        this.container.toolbar.enableItems(4, false);
        break;
      default:
        break;
    }
  };

}
