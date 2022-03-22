import axios from 'axios';

const api = 'https://localhost:44361/api/Search';
//const api = 'https://6227cb029fd6174ca813770b.mockapi.io/docs';

export const getDocuments = async (txt: string) => {

    return await axios({
        method: 'post',
        data: txt,
        url: api + `/GetallDocumentsByKeyword`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getDocument = async (txt: string) => {
    return await axios({
        method: 'post',
        data:txt,
        url: api + `/getdocument`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};