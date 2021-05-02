package com.NextThink.controller;


import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.util.*;
import com.google.gson.Gson;


@Controller("/sw-search")
public class NextThinkController {

    // declare main variables
    private final String url_people = "https://swapi.dev/api/people/?search=";
    private final String url_planet = "https://swapi.dev/api/planets/?search=";
    public final String wookie_format = "format=wookiee";
    private final HttpClient httpClient = HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();

    // Create general functions to retrieve the data from the api
    public HashMap retrieve_single_response(String Url, boolean search,boolean v) throws IOException, InterruptedException{
        // if not https enforce it
        Url = Url.replace("http:", "https:");
        // encode it to avoid problems with blank spaces and other escape characters
        Url = Url.replaceAll(" ", "%20");
        // Create the request
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(Url)).GET().build();
        // Send the request
        HttpResponse<String> resp_http = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        // print the response
        if(v) {
            System.out.println(Url);
            System.out.println(resp_http.statusCode());
            System.out.println(resp_http.body());
        }
        // extract the hash map
        HashMap resp_hashed = new ObjectMapper().readValue(resp_http.body(), HashMap.class);
        // convert it into a linked list
        if(search) {
            // if it's empty return an empty map
            if (((ArrayList) resp_hashed.get("results")).size() == 0) return new HashMap<String, Integer>();
            // if not return the correct value
            return (HashMap) ((ArrayList) resp_hashed.get("results")).get(0);

        } else{
            return (HashMap) resp_hashed;
        }
    }

    public String retrieve_response(String url, String key) throws IOException, InterruptedException{
        // create the response array
        ArrayList<HashMap> array_of_responses = new ArrayList<HashMap>();
        // Request the list of starships or inhabitants
        HashMap response = retrieve_single_response(url, true,true);
        if(response.size() == 0) {
            HashMap<String, Integer> hm = new HashMap<String, Integer>();
            hm.put("statusCode", 404);
            hm.put("msg", 1);
            array_of_responses.add(hm);
        } else {
            // cast it to an array list
            ArrayList response_list = (ArrayList) response.get(key);
            if(response_list.size() == 0){
                HashMap<String, Integer> hm = new HashMap<String, Integer>();
                hm.put("statusCode", 404);
                hm.put("msg", 2);
                array_of_responses.add(hm);
            }else {
                // loop over starships
                for (Object i : response_list) {
                    // query again to find out the value
                    array_of_responses.add(retrieve_single_response(((String) i), false, true));
                    // print the response
                    System.out.println((String) i);
                }
            }
        }
        // create the json
        Gson gson = new Gson();
        // Convert the ordered map into an ordered string & return the response
        return gson.toJson(array_of_responses, ArrayList.class);
    }


    // Create the Get methods
    @Get("/character-name/{swCharacterName}")
    public String retrieve_starship(String swCharacterName) throws IOException, InterruptedException{
        // call the main function
        return retrieve_response(url_people+swCharacterName, "starships");
    }

    @Get("/planet-name/{swPlanetName}")
    public String retrieve_inhabitants(String swPlanetName) throws IOException, InterruptedException{
        return retrieve_response(url_planet+swPlanetName, "residents");

    }
}
