import React, { useEffect, useState } from 'react';
import './productDetailStyle.css';
import SizeQuantityPriceTable from './sizeQuantityPriceTable';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function ProductDetailPage(props) {
  const user = useSelector((state) => state.auth.user);

  const shoeId = props.match.params.shoesId;
  const [shoes, setShoes] = useState({});

  useEffect(() => {
    Axios.get(`/sneaker/${shoeId}`).then((res) => {
      const shoesData = res.data;
      setShoes(shoesData);
    });
  }, []);

  useEffect(async ()=>{
    if(user){
      await Axios.post(`/viewHistory/${shoeId}/${user.id}`);
    }
  },[])



  return (
    <div className="detailPage">
      <div className="priceTable">
        <SizeQuantityPriceTable />
      </div>

      <div className="details" key={shoes.id}>
        <div>
          <img className="shoesImage" src={shoes.img} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{shoes.name}</h2>
            <span>${shoes.price}</span>
          </div>

          <p>{shoes.description}</p>

          <Link
            to={{
              pathname: '/productSellPage',
              state: {
                shoe: shoes,
              },
            }}
          >
            <button className="sell">Click to sell</button>
          </Link>
          <Link
            to={{
              pathname: '/productBuyPage',
              state: {
                shoe: shoes,
              },
            }}
          >
          <button className="buy">Click to Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
