import MaterialTable from "material-table";
import React from 'react';

export default class planet_inhabitants_table_cpm extends React.Component{
    columns;
    constructor(props){
        super(props);        
        this.state = {
            data:this.props.data,
        }
        this.columns = [
            {
                title: "Name",
                field: "name",
            },
            {
                title: "Birth Year",
                field: "birth_year",
            },
            {
                title: "Eye color",
                field: "eye_color",
            },
            {
                title: "Gender",
                field: "gender",
            },
            {
                title: "Height",
                field: "heigh",
            },
            {
                title: "Mass",
                field: "mass",
            },
            {
                title: "Skin color",
                field: "skin_color",
            },
            {
                title: "Homeworld",
                field: "homeworld",
            },
            {
                title: "url",
                field: "url",
            },
            {
                title: "When the data was created",
                field: "created",
            },
            {
                title: "Last time it was edited",
                field: "edited",
            },
        ];
    }
    render() {
        return (
            <MaterialTable 
                title="Planet Inhabitants"
                data={this.state.data}
                columns={this.columns}/>
            );}
}