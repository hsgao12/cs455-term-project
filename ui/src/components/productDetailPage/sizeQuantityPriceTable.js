import React from 'react';
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
});

function createData(size, quantity, price) {
    return { size, quantity, price };
}

const rows = [
    createData(5, 10, '$750'),
    createData(5.5, 10, '$750'),
    createData(6, 10, '$750'),
    createData(6.5, 10, '$750'),
    createData(7, 10, '$1050'),
    createData(7.5, 10, '$750'),
    createData(8, 10, '$750'),
    createData(8.5, 10, '$750'),
    createData(9, 10, '$750'),
    createData(9.5, 10, '$750'),
    createData(10, 10, '$750'),
    createData(10.5, 10, '$750'),
    createData(11, 10, '$750'),
    createData(11.5, 10, '$750'),
    createData(12, 10, '$750'),
];

export default function SizeQuantityPriceTable() {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Size</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.size}>
                            <TableCell component="th" scope="row">
                                {row.size}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}