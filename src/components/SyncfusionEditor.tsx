import { SampleBase } from "./SampleBase";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  CustomToolbarItemModel,
  SfdtExport,
  Editor,
} from "@syncfusion/ej2-react-documenteditor";
import {
  InitialDocumentTemplate,
  InitialDocumentTemplateWithImage,
} from "../templates/InitialDocument";
import { FindandReplacebuttonClick } from "./methodImplement";
import { L10n } from "@syncfusion/ej2-base";
import SearchedDocsList from "./SearchedDocsList";

L10n.load({
  sv: {
    documenteditorcontainer: {
      New: "Ny",
      Open: "Öppen",
      Undo: "Ångra",
      Redo: "Göra om",
      Image: "Bild",
      Table: "Tabell",
      Link: "Länk",
      Bookmark: "Bokmärke",
      "Table of Contents": "Innehållsförteckning",
      "HEADING - - - - 1": "RADNING - - - - 1",
      "HEADING - - - - 2": "RADNING - - - - 2",
      "HEADING - - - - 3": "RADNING - - - - 3",
      Header: "Rubrik",
      Footer: "sidfot",
      "Page Setup": "Utskriftsformat",
      "Page Number": "Sidonummer",
      Break: "Ha sönder",
      Find: "Hitta",
      "Local Clipboard": "Lokal Urklipp",
      "Restrict Editing": "Begränsa redigering",
      "Upload from computer": "Ladda upp från datorn",
      "By URL": "Med URL",
      "Page Break": "Sidbrytning",
      "Section Break": "Avsnitt Break",
      "Header And Footer": "Header & Footer",
      Options: "alternativ",
      Levels: "nivåer",
      "Different First Page": "Olika första sidan",
      "Different header and footer for odd and even pages":
        "Olika sidhuvud och sidfot för udda och jämna sidor.",
      "Different Odd And Even Pages": "Olika udda & jämna sidor",
      "Different header and footer for first page":
        "Olika sidhuvud och sidfot för första sidan.",
      Position: "Placera",
      "Header from Top": "Rubrik från toppen",
      "Footer from Bottom": "Sidfot från botten",
      "Distance from top of the page to top of the header":
        "Avstånd från toppen av sidan till toppen av rubriken.",
      "Distance from bottom of the page to bottom of the footer":
        "Avstånd från botten av sidan till botten av sidfot.",
      "Aspect ratio": "Sidförhållande",
      W: "W",
      H: "H",
      Width: "Bredd",
      Height: "Höjd",
      Text: "Text",
      Paragraph: "Paragraf",
      Fill: "Fylla",
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
      Cell: "Cell",
      "Merge cells": "Sammanfoga celler",
      "Insert Or Delete": "Infoga / radera",
      "Insert columns to the left": "Sätt in kolumner till vänster",
      "Insert columns to the right": "Sätt in kolumner till höger",
      "Insert rows above": "Sätt i raderna ovan",
      "Insert rows below": "Sätt i raderna nedan",
      "Delete rows": "Radera rader",
      "Delete columns": "Radera kolumner",
      "Cell Margin": "Cellmarginalen",
      Top: "Topp",
      Bottom: "Botten",
      Left: "Vänster",
      Right: "Rätt",
      "Align Text": "Justera text",
      "Align top": "Rikta in toppen",
      "Align bottom": "Justera botten",
      "Align center": "Centrera i linje med",
      "Number of heading or outline levels to be shown in table of contents":
        "Antal rubrik- eller konturnivåer som ska visas i innehållsförteckningen.",
      "Show page numbers": "Visa sidnummer",
      "Show page numbers in table of contents":
        "Visa sidnummer i innehållsförteckningen.",
      "Right align page numbers": "Högerjustera sidnummer",
      "Right align page numbers in table of contents":
        "Högerjustera sidnummer i innehållsförteckningen.",
      "Use hyperlinks": "Använd hyperlänkar",
      "Use hyperlinks instead of page numbers":
        "Använd hyperlänkar istället för sidnummer.",
      Font: "Font",
      "Font Size": "Textstorlek",
      "Font color": "Fontfärg",
      "Text highlight color": "Text markera färg",
      "Clear all formatting": "Rensa all formatering",
      "Bold Tooltip": "Fet (Ctrl + B)",
      "Italic Tooltip": "Kursiv (Ctrl + I)",
      "Underline Tooltip": "Understreck (Ctrl + U)",
      Strikethrough: "struken",
      "Superscript Tooltip": "Superscript (Ctrl + Shift ++)",
      "Subscript Tooltip": "Prenumeration (Ctrl + =)",
      "Align left Tooltip": "Justera vänster (Ctrl + L)",
      "Center Tooltip": "Center (Ctrl + E)",
      "Align right Tooltip": "Justera höger (Ctrl + R)",
      "Justify Tooltip": "Motivera (Ctrl + J)",
      "Decrease indent": "Minska indraget",
      "Increase indent": "Öka indrag",
      "Line spacing": "Radavstånd",
      Bullets: "Bullets",
      Numbering: "Numrering",
      Styles: "Styles",
      "Manage Styles": "Hantera stilar",
      Page: "Sida",
      of: "av",
      "Fit one page": "Montera en sida",
      "Spell Check": "Stavnings kontroll",
      "Underline errors": "Understrek fel",
      "Fit page width": "Montera sidbredden",
      Update: "Uppdatera",
      Cancel: "Avbryt",
      Insert: "Föra in",
      "No Border": "Ingen gräns",
      "Create a new document": "Skapa ett nytt dokument.",
      "Open a document": "Öppna ett dokument.",
      "Undo Tooltip": "Ångra den sista handlingen (Ctrl + Z).",
      "Redo Tooltip": "Gör om den senaste åtgärden (Ctrl + Y).",
      "Insert inline picture from a file": "Sätt in inbyggd bild från en fil.",
      "Insert a table into the document": "Sätt i en tabell i dokumentet",
      "Create Hyperlink":
        "Skapa en länk i ditt dokument för snabb åtkomst till webbsidor och filer (Ctrl + K).",
      "Insert a bookmark in a specific place in this document":
        "Sätt in ett bokmärke på en specifik plats i det här dokumentet.",
      "Provide an overview of your document by adding a table of contents":
        "Ge en översikt över ditt dokument genom att lägga till en innehållsförteckning.",
      "Add or edit the header": "Lägg till eller redigera rubriken.",
      "Add or edit the footer": "Lägg till eller redigera sidfoten.",
      "Open the page setup dialog": "Öppna sidinställningsdialogen.",
      "Add page numbers": "Lägg till sidnummer.",
      "Find Text": "Hitta text i dokumentet (Ctrl + F).",
      "Toggle between the internal clipboard and system clipboard":
        "Växla mellan det interna urklippet och systemklippbordet. </br> Tillgång till systemklippbord via skript nekas på grund av webbläsarnas säkerhetspolicy. Istället </br> 1. Du kan aktivera internt urklipp för att klippa, kopiera och klistra in i komponenten. </br> 2. Du kan använda kortkommandona (Ctrl + X, Ctrl + C och Ctrl + V) för att klippa , kopiera och klistra in med systemklippbordet.",
      "Current Page Number":
        "Det aktuella sidnumret i dokumentet. Klicka eller tryck på för att navigera på en specifik sida.",
      "Read only": "Endast läsning",
      Protections: "skydd",
      "Error in establishing connection with web server":
        "Fel vid upprättande av anslutning till webbservern",
      Single: "Enda",
      Double: "Dubbel",
      "New comment": "Ny kommentar",
      Comments: "kommentarer",
      "Print layout": "Utskriftslayout",
      "Web layout": "Webblayout",
      "Text Form": "Textform",
      "Check Box": "Kryssruta",
      DropDown: "Falla ner",
      "Update Fields": "Uppdatera fält",
      "Update cross reference fields": "Uppdatera korsreferensfält",
      "Hide properties pane": "Dölj egenskaper-rutan",
      "Show properties pane": "Visa fönstret",
      "Form Fields": "Formfält",
      "Track Changes": "Håll reda på de ändringar som gjorts i dokumentet",
      TrackChanges: "Spåra ändringar",
      AllCaps: "AllCaps",
      "Change case Tooltip": "Ändra ärende",
      "Insert Footnote": "Infoga fotnot",
      "Insert Endnote": "Infoga slutnot",
      "Footnote Tooltip": "Infoga fotnot (Alt + Ctrl + F).",
      "Endnote Tooltip": "Infoga slutnot (Alt + Ctrl + D).",
      UPPERCASE: "VERSAL",
      "No color": "VERSAL",
      "Top margin": "Ingen färg",
      "Bottom margin": "Övre marginal",
      "Left margin": "Bottenmarginal",
      "Right margin": "Vänster marginal",
      Normal: "Höger marginal",
      Heading: "Vanligt",
      "Heading 1": "Rubrik",
      "Heading 2": "Rubrik 1",
      "Heading 3": "Rubrik 2",
      "Heading 4": "Rubrik 3",
      "Heading 5": "Rubrik 4",
      "Heading 6": "Rubrik 5",
    },
  },
});

DocumentEditorContainerComponent.Inject(Toolbar, SfdtExport);

export default class SyncfusionEditor extends SampleBase {
  public container: DocumentEditorContainerComponent =
    new DocumentEditorContainerComponent({});

  constructor(props: any) {
    super(props);
    this.state = {
      initialDoc: "",
      editedDoc: "",
      isDocRestricted: false,
      setlocal: false,
      setlanguage: false,
      documentsToSearch: [""],
      searchText: "",
      isPopupShow: false,
    };

    // Add event listener for requestNavigate event to customize hyperlink navigation functionality.
    this.requestNavigate = (args: any) => {
      if (args.linkType !== "Bookmark") {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
          link += "#" + args.localReference;
        }
        //Navigate to the specified URL.
        window.open(link);
        args.isHandled = true;
        alert(link);
      }
    };
  }

  public async rendereComplete(): Promise<void> {
    this.container.documentEditor.spellChecker.languageID = 1033; //LCID of "en-us";
    this.container.documentEditor.spellChecker.removeUnderline = false;
    this.container.documentEditor.spellChecker.allowSpellCheckAndSuggestion =
      true;

    let initialDoc = InitialDocumentTemplateWithImage;
    await this.setState({ initialDoc: initialDoc });
    await this.container.documentEditor.open(initialDoc);

    let styleJson: any = {
      type: "Character",

      name: "New CharacterStyle",

      basedOn: "Default Paragraph Font",

      characterFormat: {
        fontSize: 16.0,

        fontFamily: "Verdana",

        fontColor: "#2F5496",

        bold: false,

        italic: false,

        underline: "",
      },
    };

    this.container.documentEditor.editor.createStyle(JSON.stringify(styleJson));
    this.container.documentEditor.editor.applyStyle("New CharacterStyle", true);

    // this.container.documentEditor.spellChecker.enableOptimizedSpellCheck = true;

    this.container.documentEditor.requestNavigate = (args) => {
      // navigation meth
      if (args.linkType !== "Bookmark") {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
          link += "#" + args.localReference;
        }

        if (link == "http://localhost:3000/d/1") {
          this.ondoc1Click();
        } else if (link == "http://localhost:3000/d/2") {
          this.ondoc2Click();
        }
      }
    };
  }

  searchWord() {
    //Open options pane.
    //this.container.documentEditor.showOptionsPane();
    this.container.documentEditor.search.findAll("lorem");
    this.showPopupDocumentList();
  }

  render() {
    let toolItem: CustomToolbarItemModel = {
      prefixIcon: "e-icons e-settings",
      tooltipText: "Change Language",
      text: this.state.setlocal ? "English" : "Svenska",
      id: "Custom",
    };

    let items = [
      // toolItem,
      "New",
      "Open",
      "Separator",
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
        <button id="export" onClick={this.Savebuttonclick}>
          Save{" "}
        </button>
        <button id="readonlymode" onClick={this.setDocumentReadonly}>
          Read Only Mode{" "}
        </button>
        <button id="Find" onClick={this.FindandReplaceClick}>
          Customize Header{" "}
        </button>

        <button id="button" onClick={this.ondoc1Click.bind(this)}>
          Doc 1
        </button>
        <button onClick={this.ondoc2Click.bind(this)}>Doc 2</button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.searchText}
          onChange={(e) => this.setState({ searchText: e.target.value })}
        />

        <button onClick={this.searchWord.bind(this)}> Search</button>
        <button onClick={this.hidePopupDocumentList}>Hide List</button>

        <div style={{ display: "flex" }}>
          <div id="searchlist" style={{ display: "none" }}>
            <SearchedDocsList text={this.state.searchText} container = {this.container}/>
          </div>
            <DocumentEditorContainerComponent
              ref={(scope) => {
                this.container = scope;
              }}
              id="container"
              height={"90vh"}
              toolbarItems={items}
              toolbarClick={this.onToolbarClick.bind(this)}
              //serviceUrl="https://localhost:44361/api/DocumentEditor/"
              serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
              enableToolbar={true}
              selectionChange={this.onSelectionChange.bind(this)}
              requestNavigate={this.requestNavigate.bind(this)}
              enableSpellCheck={true}
              locale={this.props.language ? "sv" : ""}
            />
        </div>
      </div>
    );
  }

  onToolbarClick = (args: any): void => {
    switch (args.item.id) {
      case "Custom":
        //Disable image toolbar item.
        // this.container.toolbar.enableItems(4, false);
        this.setState({ setlocal: !this.state.setlocal });
        break;
      default:
        break;
    }
  };

  public MoveCursorToNextCell(): void {
    var startOffset = this.container.documentEditor.selection.startOffset;

    var cellIndex = parseInt(startOffset.substring(6, 7)) + 1;

    startOffset =
      startOffset.substring(0, 6) +
      cellIndex.toString() +
      startOffset.substring(7, startOffset.length);

    this.container.documentEditor.selection.select(startOffset, startOffset);
  }

  Savebuttonclick = async () => {
    let a = await this.container.documentEditor.serialize();
    let obj1 = JSON.parse(a);
    obj1.sections[0].headersFooters.header.blocks[0].rows[0].cells[0].blocks[0].inlines[0].text =
      "row 1 column 1";
    obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[1].blocks[0].inlines[0].text =
      "row 2 column 2";
    obj1.sections[0].headersFooters.header.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text =
      "row 2 column 3";

    obj1.sections[0].headersFooters.footer.blocks[0].rows[1].cells[2].blocks[0].inlines[0].text =
      "footer row 2 column 3";
    let s = JSON.stringify(obj1);
    this.setState({ editedDoc: s });

    this.container.documentEditor.open(this.state.editedDoc);
    this.container.documentEditor.save("sample", "Sfdt");
  };

  setDocumentReadonly = async () => {
    if (this.container.documentEditor.isReadOnly) {
      this.container.restrictEditing = false;
      this.setState({ isDocRestricted: false });
    } else {
      this.container.restrictEditing = true;
      this.setState({ isDocRestricted: true });
    }
  };

  onSelectionChange(): void {
    if (this.state.isDocRestricted) {
    } else if (
      this.container.documentEditor.selection.contextType.indexOf("Header") >=
        0 ||
      this.container.documentEditor.selection.contextType.indexOf("Footer") >= 0
    ) {
      console.log(
        "header",
        this.container.documentEditor.selection.contextType.indexOf("Header"),
        "footer",
        this.container.documentEditor.selection.contextType.indexOf("Footer")
      );
      this.container.documentEditor.enableHeaderAndFooter = false;
      this.container.restrictEditing = true;
    } else {
      this.container.restrictEditing = false;
    }
  }

  FindandReplaceClick = async () => {
    FindandReplacebuttonClick(this.container);
  };

  // tk

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
      //  this.container.documentEditor.showOptionsPane();
      this.container.documentEditor.open(sfdt);
      this.container.documentEditor.editor.insertHyperlink(
        "http://localhost:3000/d/2",
        "Go-to-doc-2"
      );
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
}`;
    setTimeout(() => {
      //Open the document in Document Editor.
      this.container.documentEditor.open(sfdt);
      this.container.documentEditor.editor.insertHyperlink(
        "http://localhost:3000/d/1",
        "Go-to-doc-1"
      );
    });
  }

  showPopupDocumentList(): void {
    let elmnt = document.getElementById("searchlist");
    elmnt.style.display = "block";
    this.setState({ isPopupShow: false });
  }
  hidePopupDocumentList(): void {
    let elmnt = document.getElementById("searchlist");
    elmnt.style.display = "none";
    this.setState({ isPopupShow: false });
  }

}