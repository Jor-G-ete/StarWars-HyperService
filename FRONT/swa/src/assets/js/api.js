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

    /**
     * @summary Get Inhabitants of a planet. Given a planet name, return its habitants 
     * @param {String} planet_name Name of the planet
     * @returns {Array} Array containing in a dict format the response 
     */
    getPlanetInhabitants(planet_name, table_id){
        // declare the url
        //let url = "http://localhost:3001/sw-search/planet-name/";
        let url = "http://localhost:4001/sw-search/planet-name/";
        // get the data
        return this.apiGET(url+String(planet_name));
    },
    /**
     * @summary Get the spaceshipts that have belong a character.
     * @param {String} char_name Name of the character
     * @returns {Array} Array containing in a dict format the response 
     */
    getCharacterStarship(char_name){
        // declare the url
        //let url = "http://localhost:3001/sw-search/character-name/";
        let url = "http://localhost:4001/sw-search/character-name/";
        // get the data
        return this.apiGET(url+String(char_name));
    },
}