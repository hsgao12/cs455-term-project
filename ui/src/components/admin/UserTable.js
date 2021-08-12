import React, {useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Axios from "axios";

const columns = [
    {filed:'id', hide:true},
    {
        field: 'email',
        headerName: 'Account',
        width: 150,
        editable: false,
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        editable: false,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 180,
        editable: false,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 180,
        editable: false,
    },
];


export default function UserTable() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        Axios.get('/getAllUser')
            .then(res => {
                const userData = res.data;
                setUsers(userData);
            });
    },[]);



    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                getRowId={(row)=>row.id}
                columns={columns}
                pageSize={50}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}


