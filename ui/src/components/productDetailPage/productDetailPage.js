import React, {useEffect,useState} from 'react';
import "./productDetailStyle.css";
import SizeQuantityPriceTable from "./sizeQuantityPriceTable";
import Axios from 'axios';


export default function ProductDetailPage(props) {
    const shoeId = props.match.params.shoesId;
    const [shoes, setShoes] = useState({});

    useEffect( () => {
        Axios.get(`http://localhost:3000/sneaker/${shoeId}`)
            .then(res => {
                const shoesData = res.data;
                setShoes(shoesData);
            })
    }, [])

    return (
        <div className="detailPage">
            <div className="priceTable">
                <SizeQuantityPriceTable/>
            </div>

            <div className="details" key={shoes.id}>
                <div>
                    <img className="shoesImage" src={shoes.img} alt=""/>
                </div>

                <div className="box">
                    <div className="row">
                        <h2>{shoes.name}</h2>
                        <span>{shoes.price}</span>
                    </div>

                    <p>{shoes.description}</p>

                    <button className="sell">Click to sell</button>
                    <button className="buy">Click to Buy</button>

                </div>
            </div>
        </div>
    );
}