import MaterialTable from "material-table";
import React from 'react';

export default class starship_table_cpm extends React.Component{
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
                title: "Model",
                field: "model",
            },
            {
                title: "Manufacturer",
                field: "manufacturer",
            },
            {
                title: "Starship class",
                field: "starship_class",
            },
            {
                title: "Length",
                field: "length",
            },
            {
                title: "Crew",
                field: "Crew",
            },
            {
                title: "Passengers",
                field: "passengers",
            },
            {
                title: "Hyperdrive rating",
                field: "hyperdrive_rating",
            },
            {
                title: "Max atmosphering speed",
                field: "max_atmosphering_speed",
            },
            {
                title: "MGLT",
                field: "MGLT",
            },
            {
                title: "Cargo Capacity",
                field: "cargo_capacity",
            },
            {
                title: "Consumables",
                field: "consumables",
            },
            {
                title: "Cost in Credits",
                field: "cost_in_credits",
            },
            {
                title: "Created",
                field: "created",
            },
            {
                title: "Edited",
                field: "edited",
            }
        ];

    }
    
      
    render() {
        return (
            <div>
                <MaterialTable 
                 title="Starships"
                 data={this.state.data}
                 columns={this.columns}/>
            </div>
            );}
}