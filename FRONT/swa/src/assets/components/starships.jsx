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
                title: "Crew",
                field: "Crew",
            },
            {
                title: "Edited",
                field: "edited",
            },
            {
                title: "Hyperdrive rating",
                field: "hyperdrive_rating",
            },
            {
                title: "Length",
                field: "length",
            },
            {
                title: "Manufacturer",
                field: "manufacturer",
            },
            {
                title: "Max atmosphering speed",
                field: "max_atmosphering_speed",
            },
            {
                title: "Model",
                field: "model",
            },
            {
                title: "Name",
                field: "name",
            },
            {
                title: "Passengers",
                field: "passengers",
            },
            {
                title: "Starship class",
                field: "starship_class",
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