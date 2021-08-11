import React, {useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Axios from "axios";

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

export default function ShoesTable(props) {

    const [shoes, setShoes] = useState([]);

    useEffect(async () => {
        await Axios.get(`/getShoes`)
            .then((res) => {
                const resultData = res.data;
                setShoes(resultData);
            });
    }, []);


    return (
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid
                rows={shoes}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
