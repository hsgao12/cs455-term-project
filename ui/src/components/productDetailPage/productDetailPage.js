import React from 'react';
import "./productDetailStyle.css";
import SizeQuantityPriceTable from "./sizeQuantityPriceTable";

const shoes =     {
    id: "0001",
    img: '/shoes-images/Adidas-Yeezy360-zyon.webp',
    brand: 'Adidas',
    price: '$500',
    name: 'Yeezy booster 360 V2 Zyon',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default function ProductDetailPage(props) {

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