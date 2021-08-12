import {React, useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
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
                        <StyledTableCell>Size</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Min Price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resultArray.map(row => (
                        <StyledTableRow key={row.size}>
                            <StyledTableCell  component="th" scope="row">
                                {row.sizes}
                            </StyledTableCell >
                            <StyledTableCell  align="right">{row.quantity}</StyledTableCell >
                            <StyledTableCell  align="right">{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {!itemsForPurchaseAvailable && (
        <div className = {classes.textError}>No item in stock for Purchase!</div>)}
        </div>
    );
}