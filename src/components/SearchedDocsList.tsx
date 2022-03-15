import React, { Component, useEffect, useState } from "react";
import { getDocument, getDocuments } from "../services/searchWordService";
import "../styles/PopupWindow.css";
import {
  DocumentEditorContainerComponent,
  SfdtExport,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
import { SampleBase } from "./SampleBase";
import { findTestDoc, InitialDocumentTemplate, InitialDocumentTemplateWithImage } from "../templates/InitialDocument";

//DocumentEditorContainerComponent.Inject(Toolbar, SfdtExport);


type MyProps = {
  text: string;
 container: DocumentEditorContainerComponent;
};
class SearchedDocsList extends React.Component<MyProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      docs: [],
      selectdDocPath: "",
      selectdDoc: "",
    };
  }

  // public container: DocumentEditorContainerComponent =
  //   new DocumentEditorContainerComponent({});

  componentDidMount() {
    getDocuments(this.props.text).then((res) => {
      this.setState({ docs: res.data });
      console.log(res.data);
    });
  }

  navigateTodoc = () => {
   // this.container.documentEditor.open(InitialDocumentTemplate);
   // this.container.documentEditor.save("sample", "Sfdt");
  };

  loadSelectedDoc = async () => {
    // getDocument(this.state.selectdDocPath).then((res) => {
    //   console.log(res.data);
    //   this.setState({ selectdDoc: res.data });
    // });
 // console.log(InitialDocumentTemplateWithImage )
  this.props.container.documentEditor.open(findTestDoc);
  this.props.container.documentEditor.search.findAll("vijitha");
  this.props.container.documentEditor.showOptionsPane();
  document.getElementById('container_editor_search-icon')?.click();
  };


  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <h3>Search Results</h3>
          <ul>
            {this.state.docs.map((data: any, index: any) => (
              <li key={index}>
                <button onClick={this.loadSelectedDoc}> {data.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchedDocsList;
