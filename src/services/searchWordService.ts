import axios from 'axios';

const api = 'https://localhost:44361/api/Search';
//const api = 'https://6227cb029fd6174ca813770b.mockapi.io/docs';

export const getDocuments = async (txt :string) => {

    return await axios({
        method: 'get',
        url: api,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getDocument = async (path :string) => {
    return await axios({
        method: 'get',
        url: api + `/${txt}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};