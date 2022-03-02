import { useState } from 'react'
import logo from './logo.svg'
import { SampleBase } from './components/TestWordProcess';
import './App.css'
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel, DocumentEditor } from '@syncfusion/ej2-react-documenteditor';


DocumentEditorContainerComponent.Inject(Toolbar);

export default class App extends SampleBase {
  constructor(props: any) {
    super(props);
    this.state = {
       result:'',
       editedDoc:''

    };
  }
  public container: DocumentEditorContainerComponent = new DocumentEditorContainerComponent({});
  // public documenteditor: DocumentEditor = new DocumentEditor({ height: '370px' });


  public MoveCursorToNextCell(): void {

    var startOffset = this.container.documentEditor.selection.startOffset;

    var cellIndex = parseInt(startOffset.substring(6, 7)) + 1;

    startOffset = startOffset.substring(0, 6) + cellIndex.toString() + startOffset.substring(7, startOffset.length);

    this.container.documentEditor.selection.select(startOffset, startOffset);
  }

  public rendereComplete(): void {

    //method 01 
    //  // this.container.documentEditor.selection.goToHeader();
    //   this.container.documentEditor.editor.enforceProtection('123', 'ReadOnly');

    //   this.container.documentEditor.editor.insertTable();

    //   this.container.documentEditor.editor.insertText('1 1');
    //   this.container.documentEditor.editor.insertColumn();
    //   this.container.documentEditor.editor.insertText('1 2 ');
    //   this.container.documentEditor.editor.insertColumn();
    //   this.container.documentEditor.editor.insertText('1 3 ');

    //   this.container.documentEditor.editor.insertRow();
    //   this.container.documentEditor.editor.insertText('2 1 ');
    //   this.MoveCursorToNextCell();
    //   this.container.documentEditor.editor.insertText('2 2 ');
    //   this.MoveCursorToNextCell();
    //   this.container.documentEditor.editor.insertText('2 3 ');

    //   this.container.documentEditor.editor.insertRow();
    //   this.container.documentEditor.editor.insertText('3 1 ');
    //   this.MoveCursorToNextCell();
    //   this.container.documentEditor.editor.insertText('3 2 ');
    //   this.MoveCursorToNextCell();
    //   this.container.documentEditor.editor.insertText('3 3 ');
    //   //this.container.documentEditor.editor.insertImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')
    //   this.container.documentEditor.selection.closeHeaderFooter();


    //method 02 
    //   this.container.documentEditor.selection.goToHeader();

    let result = `{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"headersFooters":{"header":{"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 1"}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"cellWidth":156,"columnSpan":1,"rowSpan":1},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"heightType":"Auto","borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridAfter":0,"gridAfterWidth":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}}],"grid":[156,156,156],"tableFormat":{"borders":{"top":{"lineStyle":"Single","lineWidth":0.5},"left":{"lineStyle":"Single","lineWidth":0.5},"right":{"lineStyle":"Single","lineWidth":0.5},"bottom":{"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{},"diagonalUp":{},"horizontal":{"lineStyle":"Single","lineWidth":0.5},"vertical":{"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto"},"columnCount":3},{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]},"footer":{"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 1"}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"cellWidth":156,"columnSpan":1,"rowSpan":1},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"heightType":"Auto","borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridAfter":0,"gridAfterWidth":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}}],"grid":[156,156,156],"tableFormat":{"borders":{"top":{"lineStyle":"Single","lineWidth":0.5},"left":{"lineStyle":"Single","lineWidth":0.5},"right":{"lineStyle":"Single","lineWidth":0.5},"bottom":{"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{},"diagonalUp":{},"horizontal":{"lineStyle":"Single","lineWidth":0.5},"vertical":{"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto"},"columnCount":3},{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]},"evenHeader":{},"evenFooter":{},"firstPageHeader":{},"firstPageFooter":{}}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#00000000","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"bidi":false,"keepLinesTogether":false,"keepWithNext":false,"widowControl":true},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"compatibilityMode":"Word2013","styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}`;

    this.setState({ result: result});

    // let resultobj = JSON.parse(result);

    // let body =resultobj.sections[0];

    this.container.documentEditor.open(result);

    //this.container.documentEditor.editor.paste(result);
    //resultobj.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text = 'edited line'
    // let p = JSON.stringify(resultobj.sections[0].headersFooters.header.blocks[0]);

    // this.container.documentEditor.selection.goToHeader();

    //this.container.documentEditor.open(p);

    //this.container.documentEditor.selection.goToFooter();
    //this.container.documentEditor.editor.paste(result);


    // this.container.documentEditor.selection.closeHeaderFooter();

    // let a = this.container.documentEditor.serialize();
    // let obj1 = JSON.parse(a);
    // obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text = 'edited line';
    // let s = JSON.stringify(obj1);
    // this.setState({editedDoc: s});
   // this.container.documentEditor.open(s);
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
     obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text = 'editedline';
     let s = JSON.stringify(obj1);
    this.setState({editedDoc:s});
    this.container.documentEditor.open(this.state.editedDoc);
  }



}
