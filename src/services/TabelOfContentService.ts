import axios from 'axios';

//const api = 'https://localhost:44361/api/Search';
const api = 'https://622f00603ff58f023c12c0e0.mockapi.io/docs';

export const getAllDocuments = async () => {
    return await axios({
        method: 'get',
        url: api,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};