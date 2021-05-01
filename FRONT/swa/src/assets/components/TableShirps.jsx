import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default class TableStarShip extends React.Component {
    render() {return (
//Iterating thorught incoming data on props, line 22       
<TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Ejemplo1</TableCell>
            <TableCell align="right">Ejemplo2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}
}
