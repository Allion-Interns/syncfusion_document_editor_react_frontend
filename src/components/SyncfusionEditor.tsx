import { SampleBase } from './TestWordProcess';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel, SfdtExport, DocumentEditorKeyDownEventArgs } from '@syncfusion/ej2-react-documenteditor';
import { InitialDocumentTemplate, InitialDocumentTemplateWithImage } from '../templates/InitialDocument';
import { FindandReplacebuttonClick } from './methodImplement';


DocumentEditorContainerComponent.Inject(Toolbar, SfdtExport);

export default class SyncfusionEditor extends SampleBase {
  constructor(props: any) {
    super(props);
    this.state = {
      initialDoc: '',
      editedDoc: '',
      isDocRestricted: false

    };
  }


  public container: DocumentEditorContainerComponent = new DocumentEditorContainerComponent({});


  public MoveCursorToNextCell(): void {

    var startOffset = this.container.documentEditor.selection.startOffset;

    var cellIndex = parseInt(startOffset.substring(6, 7)) + 1;

    startOffset = startOffset.substring(0, 6) + cellIndex.toString() + startOffset.substring(7, startOffset.length);

    this.container.documentEditor.selection.select(startOffset, startOffset);
  }



  public async rendereComplete(): Promise<void> {

    let initialDoc = InitialDocumentTemplateWithImage;
    await this.setState({ initialDoc: initialDoc });
    await this.container.documentEditor.open(initialDoc);
    // await this.container.documentEditor.openBlank();
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
      "PageSetup",
      "PageNumber",
      "Break",
      "Separator",
      "Find",
      "Separator",
      "LocalClipboard",

    ];

    return (
      <div>
        <button id='export' onClick={this.Savebuttonclick} >Save </button>
        <button id='readonlymode' onClick={this.setDocumentReadonly} >Read Only Mode </button>
        <button id='Find' onClick={this.FindandReplaceClick} >Customize Header </button>
        <DocumentEditorContainerComponent
          ref={scope => {
            this.container = scope;
          }}
          id="container"
          height={'1250px'}
          toolbarItems={items}
          toolbarClick={this.onToolbarClick.bind(this)}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
          selectionChange={this.onSelectionChange.bind(this)}
        />
      </div>
    );
  }


  onToolbarClick = (args: any): void => {
    switch (args.item.id) {
      case "Custom":
        this.container.toolbar.enableItems(4, false);
        break;
      default:
        break;
    }
  };

  Savebuttonclick = async () => {

    let a = await this.container.documentEditor.serialize();
    let obj1 = JSON.parse(a);
    obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text = 'row 1 column 1';
    obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[1].blocks[0].inlines[0].text = 'row 2 column 2';
    obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text = 'row 2 column 3';


    obj1.sections[0].headersFooters.footer.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text = 'footer row 2 column 3';
    let s = JSON.stringify(obj1);
    this.setState({ editedDoc: s });
    this.container.documentEditor.open(this.state.editedDoc);
    this.container.documentEditor.save('sample', 'Sfdt');
  }


  setDocumentReadonly = async () => {

    if (this.container.documentEditor.isReadOnly) {
      this.container.restrictEditing = false;
      this.setState({ isDocRestricted: false });
    }
    else {
      this.container.restrictEditing = true;
      this.setState({ isDocRestricted: true });
    }
  }

  onSelectionChange(): void {
    if (this.state.isDocRestricted) { }
    else if (this.container.documentEditor.selection.contextType.indexOf("Header") >= 0 || this.container.documentEditor.selection.contextType.indexOf("Footer") >= 0) {
      console.log('header', this.container.documentEditor.selection.contextType.indexOf("Header"), 'footer', this.container.documentEditor.selection.contextType.indexOf("Footer"))
      this.container.documentEditor.enableHeaderAndFooter = false;
      this.container.restrictEditing = true;
    }
    else {
      this.container.restrictEditing = false;
    }
  }


  FindandReplaceClick = async () => {
    FindandReplacebuttonClick(this.container);
  }


}
