import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Axios from 'axios';

//Creating a from with input validation https://dev.to/hibaeldursi/creating-a-contact-form-with-validation-with-react-and-material-ui-1am0

const inputFieldValues = [
    {
        name: "brand",
        label: "Brand",
        id: "shoe-brand"
    },
    {
        name: "name",
        label: "Name",
        id: "shoe-name"
    },
    {
        name: "img",
        label: "Image URL",
        id: "shoe-img"
    },
    {
        name: "price",
        label: "Price",
        id: "shoe-price"
    },
    {
        name: "description",
        label: "Description",
        id: "shoe-desc",
        multiline: true,
        rows: 10
    }
];

const useStyles = makeStyles({
    modalBody: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        background: 'white',
        borderRadius: 8,
    },
    headerText: {
        textAlign: 'center',
        marginBottom: '15px',
    },
    formBox: {
        width: '90%',
        textAlign: 'center',
        margin: 'auto',
    }
});


export default function AddShoesForm(props) {
    const classes = useStyles();
    const setOpen = props.setOpen;
    const [errors, setErrors] = useState({});
    const [inputError, setInputErrors] = useState(false);
    const [input, setInput] = useState({
        brand:"",
        name:"",
        img:"",
        price:0,
        numberOfSale:0,
        description:"",
        priceHistory:[],
        stock:[
            {size:"1", quantity: 0},
            {size:"1.5", quantity: 0},
            {size:"2", quantity: 0},
            {size:"2.5", quantity: 0},
            {size:"3", quantity: 0},
            {size:"3.5", quantity: 0},
            {size:"4", quantity: 0},
            {size:"4.5", quantity: 0},
            {size:"5", quantity: 0},
            {size:"5.5", quantity: 0},
            {size:"6", quantity: 0},
            {size:"6.5", quantity: 0},
            {size:"7", quantity: 0},
            {size:"7.5", quantity: 0},
            {size:"8", quantity: 0},
            {size:"8.5", quantity: 0},
            {size:"9", quantity: 0},
            {size:"9.5", quantity: 0},
            {size:"10", quantity: 0},
            {size:"10.5", quantity: 0},
            {size:"11", quantity: 0},
            {size:"11.5", quantity: 0},
            {size:"12", quantity: 0},
            {size:"12.5", quantity: 0},
            {size:"13", quantity: 0},
            {size:"13.5", quantity: 0},
            {size:"14", quantity: 0},
            {size:"14.5", quantity: 0},
            {size:"15", quantity: 0},
            {size:"16", quantity: 0},
            {size:"17", quantity: 0},
            {size:"18", quantity: 0},
        ],
    });

    const validate = (value) => {
        let temp = { ...errors };

        if ("brand" in value)
            temp.brand = value.brand ? "" : "This field is required.";

        if ("name" in value) {
            temp.name = value.name ? "" : "This field is required.";
        }

        if ("img" in value) {
            temp.img = value.img ? "" : "This field is required.";
        }

        if ("price" in value) {
            temp.price = parseInt(value.price) ? 0 : "Price cannot be $0.";
        }

        if ("description" in value)
            temp.description = value.description.length !== 0 ? "" : "This field is required.";

        setErrors({...temp});

        const isValid = Object.values(errors).every((x) => x === "");
        setInputErrors(isValid);
    };

    const handleSubmit = () => {
        Axios.post('/addNewSneaker', input)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value
        });
        validate({ [name]: value });
    };

    return (
        <paper className={classes.modalBody}>
            <Typography variant="h5" className={classes.headerText}>
                {' '}
                Add New Shoes{' '}
            </Typography>
            <div className={classes.formBox}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    {inputFieldValues.map((inputFieldValue, index) => {
                        return (
                            <TextField
                                key={index}
                                onChange={handleChange}
                                onBlur={handleChange}
                                name={inputFieldValue.name}
                                label={inputFieldValue.label}
                                error={errors[inputFieldValue.name]}
                                multiline={inputFieldValue.multiline ?? false}
                                fullWidth
                                rows={inputFieldValue.rows ?? 1}
                                autoComplete="none"
                                {...(errors[inputFieldValue.name] && {
                                    error: true,
                                    helperText: errors[inputFieldValue.name]
                                })}
                            />
                        );
                    })}
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        disabled={inputError}
                    >
                        Add Shoes
                    </Button>
                </form>
            </div>
        </paper>
    );


}