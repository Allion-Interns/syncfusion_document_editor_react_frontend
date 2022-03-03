import { useState } from 'react'
import logo from './logo.svg'
import { SampleBase } from './components/TestWordProcess';
import './App.css'
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel, CharacterFormatProperties, DocumentEditorComponent, DocumentEditor } from '@syncfusion/ej2-react-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'sv':{
    "documenteditorcontainer": {
      "New": "Ny",
      "Open": "Öppen",
      "Undo": "Ångra",
      "Redo": "Göra om",
      "Image": "Bild",
      "Table": "Tabell",
      "Link": "Länk",
      "Bookmark": "Bokmärke",
      "Table of Contents": "Innehållsförteckning",
      "HEADING - - - - 1": "RADNING - - - - 1",
      "HEADING - - - - 2": "RADNING - - - - 2",
      "HEADING - - - - 3": "RADNING - - - - 3",
      "Header": "Rubrik",
      "Footer": "sidfot",
      "Page Setup": "Utskriftsformat",
      "Page Number": "Sidonummer",
      "Break": "Ha sönder",
      "Find": "Hitta",
      "Local Clipboard": "Lokal Urklipp",
      "Restrict Editing": "Begränsa redigering",
      "Upload from computer": "Ladda upp från datorn",
      "By URL": "Med URL",
      "Page Break": "Sidbrytning",
      "Section Break": "Avsnitt Break",
      "Header And Footer": "Header & Footer",
      "Options": "alternativ",
      "Levels": "nivåer",
      "Different First Page": "Olika första sidan",
      "Different header and footer for odd and even pages": "Olika sidhuvud och sidfot för udda och jämna sidor.",
      "Different Odd And Even Pages": "Olika udda & jämna sidor",
      "Different header and footer for first page": "Olika sidhuvud och sidfot för första sidan.",
      "Position": "Placera",
      "Header from Top": "Rubrik från toppen",
      "Footer from Bottom": "Sidfot från botten",
      "Distance from top of the page to top of the header": "Avstånd från toppen av sidan till toppen av rubriken.",
      "Distance from bottom of the page to bottom of the footer": "Avstånd från botten av sidan till botten av sidfot.",
      "Aspect ratio": "Sidförhållande",
      "W": "W",
      "H": "H",
      "Width": "Bredd",
      "Height": "Höjd",
      "Text": "Text",
      "Paragraph": "Paragraf",
      "Fill": "Fylla",
      "Fill color": "Fyllnadsfärg",
      "Border Style": "Gränsstil",
      "Outside borders": "Yttre gränser",
      "All borders": "Alla gränser",
      "Inside borders": "Inre gränser",
      "Left border": "Vänster gräns",
      "Inside vertical border": "Inuti vertikal kant",
      "Right border": "Höger gräns",
      "Top border": "Övre gränsen",
      "Inside horizontal border": "Inuti horisontell kant",
      "Bottom border": "Nedre gränsen",
      "Border color": "Gräns ​​färg",
      "Border width": "Gränsbredd",
      "Cell": "Cell",
      "Merge cells": "Sammanfoga celler",
      "Insert Or Delete": "Infoga / radera",
      "Insert columns to the left": "Sätt in kolumner till vänster",
      "Insert columns to the right": "Sätt in kolumner till höger",
      "Insert rows above": "Sätt i raderna ovan",
      "Insert rows below": "Sätt i raderna nedan",
      "Delete rows": "Radera rader",
      "Delete columns": "Radera kolumner",
      "Cell Margin": "Cellmarginalen",
      "Top": "Topp",
      "Bottom": "Botten",
      "Left": "Vänster",
      "Right": "Rätt",
      "Align Text": "Justera text",
      "Align top": "Rikta in toppen",
      "Align bottom": "Justera botten",
      "Align center": "Centrera i linje med",
      "Number of heading or outline levels to be shown in table of contents": "Antal rubrik- eller konturnivåer som ska visas i innehållsförteckningen.",
      "Show page numbers": "Visa sidnummer",
      "Show page numbers in table of contents": "Visa sidnummer i innehållsförteckningen.",
      "Right align page numbers": "Högerjustera sidnummer",
      "Right align page numbers in table of contents": "Högerjustera sidnummer i innehållsförteckningen.",
      "Use hyperlinks": "Använd hyperlänkar",
      "Use hyperlinks instead of page numbers": "Använd hyperlänkar istället för sidnummer.",
      "Font": "Font",
      "Font Size": "Textstorlek",
      "Font color": "Fontfärg",
      "Text highlight color": "Text markera färg",
      "Clear all formatting": "Rensa all formatering",
      "Bold Tooltip": "Fet (Ctrl + B)",
      "Italic Tooltip": "Kursiv (Ctrl + I)",
      "Underline Tooltip": "Understreck (Ctrl + U)",
      "Strikethrough": "struken",
      "Superscript Tooltip": "Superscript (Ctrl + Shift ++)",
      "Subscript Tooltip": "Prenumeration (Ctrl + =)",
      "Align left Tooltip": "Justera vänster (Ctrl + L)",
      "Center Tooltip": "Center (Ctrl + E)",
      "Align right Tooltip": "Justera höger (Ctrl + R)",
      "Justify Tooltip": "Motivera (Ctrl + J)",
      "Decrease indent": "Minska indraget",
      "Increase indent": "Öka indrag",
      "Line spacing": "Radavstånd",
      "Bullets": "Bullets",
      "Numbering": "Numrering",
      "Styles": "Styles",
      "Manage Styles": "Hantera stilar",
      "Page": "Sida",
      "of": "av",
      "Fit one page": "Montera en sida",
      "Spell Check": "Stavnings kontroll",
      "Underline errors": "Understrek fel",
      "Fit page width": "Montera sidbredden",
      "Update": "Uppdatera",
      "Cancel": "Avbryt",
      "Insert": "Föra in",
      "No Border": "Ingen gräns",
      "Create a new document": "Skapa ett nytt dokument.",
      "Open a document": "Öppna ett dokument.",
      "Undo Tooltip": "Ångra den sista handlingen (Ctrl + Z).",
      "Redo Tooltip": "Gör om den senaste åtgärden (Ctrl + Y).",
      "Insert inline picture from a file": "Sätt in inbyggd bild från en fil.",
      "Insert a table into the document": "Sätt i en tabell i dokumentet",
      "Create Hyperlink": "Skapa en länk i ditt dokument för snabb åtkomst till webbsidor och filer (Ctrl + K).",
      "Insert a bookmark in a specific place in this document": "Sätt in ett bokmärke på en specifik plats i det här dokumentet.",
      "Provide an overview of your document by adding a table of contents": "Ge en översikt över ditt dokument genom att lägga till en innehållsförteckning.",
      "Add or edit the header": "Lägg till eller redigera rubriken.",
      "Add or edit the footer": "Lägg till eller redigera sidfoten.",
      "Open the page setup dialog": "Öppna sidinställningsdialogen.",
      "Add page numbers": "Lägg till sidnummer.",
      "Find Text": "Hitta text i dokumentet (Ctrl + F).",
      "Toggle between the internal clipboard and system clipboard": "Växla mellan det interna urklippet och systemklippbordet. </br> Tillgång till systemklippbord via skript nekas på grund av webbläsarnas säkerhetspolicy. Istället </br> 1. Du kan aktivera internt urklipp för att klippa, kopiera och klistra in i komponenten. </br> 2. Du kan använda kortkommandona (Ctrl + X, Ctrl + C och Ctrl + V) för att klippa , kopiera och klistra in med systemklippbordet.",
      "Current Page Number": "Det aktuella sidnumret i dokumentet. Klicka eller tryck på för att navigera på en specifik sida.",
      "Read only": "Endast läsning",
      "Protections": "skydd",
      "Error in establishing connection with web server": "Fel vid upprättande av anslutning till webbservern",
      "Single": "Enda",
      "Double": "Dubbel",
      "New comment": "Ny kommentar",
      "Comments": "kommentarer",
      "Print layout": "Utskriftslayout",
      "Web layout": "Webblayout",
      "Text Form": "Textform",
      "Check Box": "Kryssruta",
      "DropDown": "Falla ner",
      "Update Fields": "Uppdatera fält",
      "Update cross reference fields": "Uppdatera korsreferensfält",
      "Hide properties pane": "Dölj egenskaper-rutan",
      "Show properties pane": "Visa fönstret",
      "Form Fields": "Formfält",
      "Track Changes": "Håll reda på de ändringar som gjorts i dokumentet",
      "TrackChanges": "Spåra ändringar",
      "AllCaps": "AllCaps",
      "Change case Tooltip": "Ändra ärende",
      "Insert Footnote": "Infoga fotnot",
      "Insert Endnote": "Infoga slutnot",
      "Footnote Tooltip": "Infoga fotnot (Alt + Ctrl + F).",
      "Endnote Tooltip": "Infoga slutnot (Alt + Ctrl + D).",
      "UPPERCASE": "VERSAL",
      "No color": "VERSAL",
      "Top margin": "Ingen färg",
      "Bottom margin": "Övre marginal",
      "Left margin": "Bottenmarginal",
      "Right margin": "Vänster marginal",
      "Normal": "Höger marginal",
      "Heading": "Vanligt",
      "Heading 1": "Rubrik",
      "Heading 2": "Rubrik 1",
      "Heading 3": "Rubrik 2",
      "Heading 4": "Rubrik 3",
      "Heading 5": "Rubrik 4",
      "Heading 6": "Rubrik 5"
  }
  }
})


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
    this.container.documentEditor.spellChecker.languageID = 1033 //LCID of "en-us";
    this.container.documentEditor.spellChecker.removeUnderline = false;
    this.container.documentEditor.spellChecker.allowSpellCheckAndSuggestion = true;
    // this.container.documentEditor.setDefaultCharacterFormat({ fontFamily: 'Verdana', fontSize: 20 });
    // this.container.documentEditor.openBlank();

    let result = `{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"headersFooters":{"header":{"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 1"}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"cellWidth":156,"columnSpan":1,"rowSpan":1},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"heightType":"Auto","borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridAfter":0,"gridAfterWidth":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}}],"grid":[156,156,156],"tableFormat":{"borders":{"top":{"lineStyle":"Single","lineWidth":0.5},"left":{"lineStyle":"Single","lineWidth":0.5},"right":{"lineStyle":"Single","lineWidth":0.5},"bottom":{"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{},"diagonalUp":{},"horizontal":{"lineStyle":"Single","lineWidth":0.5},"vertical":{"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto"},"columnCount":3},{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]},"footer":{"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 1"}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"cellWidth":156,"columnSpan":1,"rowSpan":1},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"bidi":false},"text":"1 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"heightType":"Auto","borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridAfter":0,"gridAfterWidth":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 2 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"2 3 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 1 "}]}],"cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},"inlines":[{"characterFormat":{"bidi":false},"text":"3 2 "}]}],
    "cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},
    "vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,
    "columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},
    {"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"bidi":false},
    "inlines":[{"characterFormat":{"bidi":false},"text":"3 3 "}]}],
    "cellFormat":{"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"shading":{},"preferredWidth":156,"preferredWidthType":"Point","cellWidth":156,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":0,"allowBreakAcrossPages":true,"heightType":"Auto","isHeader":false,"borders":{"top":{},"left":{},"right":{},"bottom":{},"diagonalDown":{},"diagonalUp":{},"horizontal":{},"vertical":{}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point","leftIndent":0}}],
    "grid":[156,156,156],"tableFormat":{"borders":{"top":{"lineStyle":"Single","lineWidth":0.5},"left":{"lineStyle":"Single","lineWidth":0.5},
    "right":{"lineStyle":"Single","lineWidth":0.5},"bottom":{"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{},"diagonalUp":{},
    "horizontal":{"lineStyle":"Single","lineWidth":0.5},"vertical":{"lineStyle":"Single","lineWidth":0.5}},"shading":{},
    "leftIndent":0,"topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto"},"columnCount":3},
    {"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]},"evenHeader":{},"evenFooter":{},"firstPageHeader":{},
    "firstPageFooter":{}}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#00000000","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"bidi":false,"keepLinesTogether":false,"keepWithNext":false,"widowControl":true},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"compatibilityMode":"Word2013","styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}`;

    this.container.documentEditor.open(result);
    let styleJson: any = {

      "type": "Character",
  
      "name": "New CharacterStyle",
  
      "basedOn": "Default Paragraph Font",
  
      "characterFormat": {
  
          "fontSize": 16.0,
  
          "fontFamily": "Verdana",
  
          "fontColor": "#2F5496",
  
          "bold": false,
  
          "italic": false,
  
          "underline": ""
  
      }
  
      };
  
      this.container.documentEditor.editor.createStyle(JSON.stringify(styleJson));
  
      this.container.documentEditor.editor.applyStyle('New CharacterStyle', true);

    
   // this.container.documentEditor.spellChecker.enableOptimizedSpellCheck = true;

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
        <button id='button'  onClick={this.ondoc1Click.bind(this)}>Doc 1</button>
        <button onClick={this.ondoc2Click.bind(this)} >Doc 2</button>

        <DocumentEditorContainerComponent
          ref={scope => {
            this.container = scope;
          }}
          serviceUrl="https://localhost:44361/api/DocumentEditor/"
          id="container"
          height={'700px'}
          toolbarItems={items}
          enableToolbar={true}
          requestNavigate={this.requestNavigate.bind(this)}
          enableSpellCheck={true}
         // locale='sv' 
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

  //  document.getElementById("button").style.background='#000000';
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
