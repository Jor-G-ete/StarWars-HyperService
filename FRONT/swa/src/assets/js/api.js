/**
 * Name: API.js
 * Author: Jorge Lopez Marcos 
 * Description: This file holds all low and mid level functionality for any HTTP request.
 */
module.exports = {
    /**
     * @summary Default GET request
     * @param {String} apiURL The URL endpoint
     * @returns {Object} Resulting JSON from the endpoint 
     */
    apiGET: async function(apiURL) {
        const res = await fetch(apiURL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
        });
        if (res.ok) return await res.json();
        else
        return {
            url: apiURL,
            statusCode: res.status,
        };
    },
    getCharacterStarship(char_name, table_id){
        
        // declare the url
        let url = "";
        // get the data
        let data_promised = this.apiGET(url+String(char_name));

        // generate a promise
        Promise.all([data_promised]).then((data) =>{
            // create the new element
            table_id.data = data[0];
        })

    }
}