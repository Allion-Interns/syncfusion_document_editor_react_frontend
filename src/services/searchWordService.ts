import axios from 'axios';

const api = 'https://localhost:44361/api/Search';
//const api = 'https://6227cb029fd6174ca813770b.mockapi.io/docs';

export const getDocuments = async (txt: string) => {

    return await axios({
        method: 'get',
        url: api,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getDocument = async (path: string) => {
    return await axios({
        method: 'get',
        url: api + `/${txt}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const sendSfdt = async (sdftdata: string) => {

   
    await axios.post('https://localhost:44361/api/Search/getdocumentbysfdt', sdftdata, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            var a = response.data;

            console.log(JSON.stringify(a));
        })
        .catch(function (error) {
            console.log(error);
        });

}

