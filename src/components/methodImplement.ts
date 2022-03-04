import { DocumentEditorContainerComponent } from '@syncfusion/ej2-react-documenteditor';

export const FindandReplacebuttonClick = async (container: DocumentEditorContainerComponent) => {
  await container.documentEditor.search.findAll('##CustomerName##', 'None');
  await container.documentEditor.search.searchResults.replaceAll("Jhon");
  await container.documentEditor.search.searchResults.clear();

  await container.documentEditor.search.findAll('##CustomerAddress##', 'None');
  await container.documentEditor.search.searchResults.replaceAll("NO 52, main street, colombo ");
  await container.documentEditor.search.searchResults.clear();

}


