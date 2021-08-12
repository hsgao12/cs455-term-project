import React, {useEffect, useState} from 'react';
import {DataGrid, GridRowId} from '@material-ui/data-grid';
import Axios from "axios";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue, red} from '@material-ui/core/colors';
import SearchBar from "../searchBar/SearchBar";
import Modal from "@material-ui/core/Modal";
import AddShoesForm from "./AddShoesForm";

const columns = [
    {
        field: 'brand',
        headerName: 'Brand',
        width: 150,
        editable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 250,
        editable: false,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        editable: false,
    },
    {
        field: 'stock',
        headerName: 'Stock',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => {
            let sum =0;
            params.value.forEach(value => {
                sum+=value.quantity;
            });
            return sum;
        }
    },
];

const AddButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
}))(Button);

const DeleteButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ShoesTable(props) {

    const classes = useStyles();
    const [Open, setOpen] = useState(false);
    const [shoes, setShoes] = useState([]);
    const [selectionModel, setSelectionModel] = React.useState([]);

    useEffect(async () => {
        await Axios.get(`/getShoes`)
            .then((res) => {
                const resultData = res.data;
                setShoes(resultData);
            });
    }, []);


    const handleDelete = () => {
        selectionModel.forEach(item => {
            Axios.delete('/deleteSneaker/'+item)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        });
        setSelectionModel([]);
    };

    return (
        <div>
            <AddButton
                variant="contained"
                color="#2196f3"
                className={classes.button}
                endIcon={<SaveIcon/>}
                onClick={() => setOpen(true)}
            >
                Add
            </AddButton>
            <Modal open={Open} onClose={() => setOpen(false)}>
                <AddShoesForm  setOpen={setOpen}/>
            </Modal>
            <DeleteButton
                variant="contained"
                color="#f50057"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
            >
                Delete
            </DeleteButton>
            <div style={{ height: 400, width: '45%' }}>
                <DataGrid
                    rows={shoes}
                    getRowId={(row) => row._id}
                    columns={columns}
                    pageSize={100}
                    checkboxSelection
                    onSelectionModelChange={(newSelection) => {
                        setSelectionModel([...newSelection]);
                    }}
                    selectionModel={selectionModel}
                />
            </div>
        </div>
    );
}
