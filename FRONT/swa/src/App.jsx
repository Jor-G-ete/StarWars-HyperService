import logo from './assets/gifs/yoda.gif';
import './App.css';
import TableStarShipsCmp from './assets/components/starships'
import PlanetInhabitantsCmp from './assets/components/planet_inhabitants'
import { Button } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import '@material-ui/core';
import '@material-ui/icons';
import API from './assets/js/api'

import React from 'react'

export default class App extends React.Component {
//Props are values that are sended via tag attributes Father => Child (App => TableShirps) Line 41
//state values are automaticaly refreshed in view when updated using setState  
//Send data to <TableShirp Props={State.data}> using state variable => update state variable => GG
constructor(props){
  super(props);
  this.state = {
    starWarsData: [
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

    starship_data: [
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
    inhabitants_data: []
  }
}

//Deafult React Allegro method that is trigered whenever the component finish loading
componentDidMount(){
  //TODO: Just a simple test sending dummy values
  var dataTest = [{name:"Prueba",email:"Prueba2"},{name:"Prueba2",email:"Prueba3"}]
  this.setState({starWarsData:dataTest})
}


  render(){
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
          <form autoComplete="on">
              <TextField 
                id="character_name" 
                label="Character Name" 
                placeholder="Rey Skywalker" 
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"> <AccountCircle /></InputAdornment>
                  )}}
                />
              <TextField 
                id="planet_name" 
                label="Planet Name" 
                placeholder="Mustafar" 
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"> <AccountCircle /></InputAdornment>
                  ),
                }}
                />
              <Button variant="contained" onClick={this.search('',"naboo")}>Search</Button>
          </form>
        </div>
        <div id="tables" >
          {this.state.starship_data.length > 0 && 
            <TableStarShipsCmp data={this.state.starship_data}/>
          }
          {this.state.inhabitants_data.length > 0 && 
            <PlanetInhabitantsCmp data={this.state.inhabitants_data}/>
          }
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
  search(character, planet){
    // apiGET reference and prepare response
    // log and declare values
    console.log(character);
    console.log(planet);
    let character_response = [];
    let planet_response = [];
    // call the methods to request the data
    if(character !== '') character_response =  API.getCharacterStarship(character, '');
    if(planet !== '') planet_response =  API.getPlanetInhabitants(planet, '');
    // set the data
    this.setState({starship_data:character_response});
    this.setState({inhabitants_data:planet_response});
    
    // alternative method
    //updateTable(data  )
    console.log("my search logic")
  }
  updateTable(data){
  //TODO: update table  
  // var myNewData = async ApiGET('url');
  // this.setState({starWarsData:data})
  }
}
