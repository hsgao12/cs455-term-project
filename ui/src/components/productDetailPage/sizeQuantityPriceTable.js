import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
    textError: {
      color: "red", 
    }
});
export default function SizeQuantityPriceTable( {resultArray, itemsForPurchaseAvailable}) { 
    const classes = useStyles();
    console.log(resultArray);
    console.log(itemsForPurchaseAvailable);
    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell>Size</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Min Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resultArray.map(row => (
                        <TableRow key={row.size}>
                            <TableCell component="th" scope="row">
                                {row.sizes}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {!itemsForPurchaseAvailable && (
        <div className = {classes.textError}>No item in stock for Purchase!</div>)}
        </div>
    );
}