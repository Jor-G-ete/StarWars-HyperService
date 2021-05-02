import '@material-ui/core';
import '@material-ui/icons';
import './App.css';
import logo from './assets/gifs/yoda.gif';
import NotFound from './assets/images/notfound.jpg';
import NotFound2 from './assets/images/notfound2.jpg';
import TableStarShipsCmp from './assets/components/table_chracter_starships'
import TablePlanetInhabitantsCmp from './assets/components/table_planet_inhabitants'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import API from './assets/js/api'
import React from 'react'

export default class App extends React.Component {
  //Props are values that are sended via tag attributes Father => Child (App => TableShirps) Line 41
  //state values are automaticaly refreshed in view when updated using setState  
  //Send data to <TableShirp Props={State.data}> using state variable => update state variable => GG
  constructor(props){
    super(props);
    // create variables of the component
    this.state = {
      input_character: "",
      input_planet: "",
      message_character: "Found blank input text area was. Yes, hrrrm...",
      message_planet: "Input text area was found blank.",
      test_data: [
                  {
                      "MGLT": 1,
                      "cargo_capacity": 1,
                      "consumables": 1,
                      "cost_in_credits": 1,
                      "created": 1,
                      "Crew": 1,
                      "edited": 1,
                      "hyperdrive_rating": 1,
                      "length": 1,
                      "manufacturer": 1,
                      "max_atmosphering_speed": 1,
                      "model": 1,
                      "name": 1,
                      "passengers": 1,
                      "starship_class": 1
                  }
    
      ],
      starship_data:[],
      inhabitants_data: []
    }
    // bind the functions
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  // handlers
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
  }
  search(event){
    // declare values
    let character = this.state.input_character;
    let planet = this.state.input_planet;
    let character_response = [];
    let planet_response = [];
    // log it 
    console.log(character);
    console.log(planet);
    // call the methods to request the data
    if(character !== "") character_response =  API.getCharacterStarship(character);
    if(planet !== "") planet_response =  API.getPlanetInhabitants(planet);
    // create a promise    
    Promise.all([character_response, planet_response]).then((data) =>{
      // check the responses, in case of not found show it.
      // character response
      if(character_response.length != 0){
        if("statusCode" in data[0][0]){
          this.setState({
              message_character: (data[0][0].msg === 1) ? "No characters were found" : "No spaceships were found",
              starship_data:[],
            }
          );
        }else this.setState({starship_data:data[0]});
      }
      // planet response
      if(planet_response.length != 0){
        if("statusCode" in data[1][0]){
          this.setState({
              message_planet: (data[1][0].msg === 1) ? "Exist the planet does not. Try another. Hrmmm." : "Contain habitants the planet does not..",
              inhabitants_data:[],
            }
          );
        }else this.setState({inhabitants_data:data[1]});
      }
      // log the result
      console.log(data[0]);
      console.log(data[1]);
      // remove hiden tag
      document.getElementById("tables").removeAttribute('hidden');
    });
  }

  
  render(){
    // conditional rendering
    // declare the variables
    let tablecharacter;
    let tableplanet;
    // character if
    if(this.state.starship_data.length > 0) tablecharacter = <TableStarShipsCmp data={this.state.starship_data}/>;
    else tablecharacter = <div><h2>{this.state.message_character}</h2> <img src={NotFound} className="" alta="NotFound"/></div>;
    // planet if
    if(this.state.inhabitants_data.length > 0) tableplanet = <TablePlanetInhabitantsCmp data={this.state.inhabitants_data}/>;
    else tableplanet = <div><h2>{this.state.message_planet}</h2> <img src={NotFound2} className="" alta="NotFound2"/></div>;
    // return the html
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <header className="App-header">
          <div id="header"> 
            <h1> NextThink Fullstack application</h1>
            <h2>From a Nerd to another Nerd: </h2>
            <img src={logo} className="" alt="logo" />
          </div>
          <div id="form">
            <form autoComplete="on" onSubmit={this.handleSubmit}>
                <TextField 
                  name="input_character" 
                  label="Character Name" 
                  placeholder="Rey Skywalker" 
                  variant="filled"
                  value={this.state.input_character}
                  onChange = {this.handleChange}
                  style = {{
                    background: "white"
                  }}
                  />
                <TextField 
                  name="input_planet" 
                  label="Planet Name" 
                  placeholder="Mustafar" 
                  variant="filled"
                  value={this.state.input_planet}
                  onChange = {this.handleChange}
                  InputProps={{
                    shrink: true
                  }}
                  style = {{
                    background: "white",
                  }}
                  />
                <hr/>
                <Button 
                  variant="contained" 
                  type="submit" 
                  size="large"
                  onClick={this.search}
                  block
                  >Search</Button>
                <hr/>
            </form>
          </div>
          <div 
            id="tables"  
            hidden
            block 
            style={{

            }}>
              {tablecharacter}
              {tableplanet}
          </div>
          <a
            className="App-link"
            href="https://github.com/Jor-G-ete"
            target="_blank"
            rel="noopener noreferrer"
          >
          Link to Jorge's Github! 
          </a>
        </header>
      </div>
  )};
}
