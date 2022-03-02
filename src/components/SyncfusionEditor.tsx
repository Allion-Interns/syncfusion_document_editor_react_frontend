import { SampleBase } from './TestWordProcess';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel } from '@syncfusion/ej2-react-documenteditor';
import { InitialDocumentTemplate } from '../templates/InitialDocument';


DocumentEditorContainerComponent.Inject(Toolbar);

export default class SyncfusionEditor extends SampleBase {
  constructor(props: any) {
    super(props);
    this.state = {
       initialDoc:'',
       editedDoc:''

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

    let initialDoc = InitialDocumentTemplate;
    await this.setState({ initialDoc: initialDoc});
    await this.container.documentEditor.open(initialDoc);
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
        <button onClick={this.buttonOnclick} >save </button>

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
      </div>

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

  buttonOnclick = async() => {
    
    let a  = await this.container.documentEditor.serialize();
     let obj1 = JSON.parse(a);
     obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text = 'row 1 column 1'; 
     obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[1].blocks[0].inlines[0].text = 'row 1 column 2';
     obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[2].blocks[0].inlines[0].text = 'row 1 column 3';
     obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[0].blocks[0].inlines[0].text = 'row 2 column 1';
     obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[1].blocks[0].inlines[0].text = 'row 2 column 2';
     obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text = 'row 2 column 3';


     obj1.sections[0].headersFooters.footer.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text = 'footer row 2 column 3';
     let s = JSON.stringify(obj1);
    this.setState({editedDoc:s});
    this.container.documentEditor.open(this.state.editedDoc);

  }



}
