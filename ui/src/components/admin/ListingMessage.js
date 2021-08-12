import React, {useEffect, useState} from 'react';
import Axios from "axios";


export default function ListingMessage(){
    const [list, setList] = useState([]);

    useEffect(()=> {
        Axios.get('/getAllListing')
            .then(res => {
                const listingData = res.data;
                setList(listingData);
            });
    },[]);

    let numOflist = list.length;
    let numOfSold = 0;
    list.forEach(item => {
        if(item.sold)
            numOfSold++;
    });

    return (
        <div>
            <h5>There is currently {numOflist} listing in our market. And {numOfSold} item has been sold. Keep doing great job.</h5>
        </div>
    );



}