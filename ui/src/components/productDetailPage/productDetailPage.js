import React, { useEffect, useState } from 'react';
import './productDetailStyle.css';
import SizeQuantityPriceTable from './sizeQuantityPriceTable';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {Tooltip} from "@material-ui/core";
import Recommended from "../recommended/recommended";


export default function ProductDetailPage(props) {
  const user = useSelector((state) => state.auth.user);
  var arrayR = [];
  const shoeId = props.match.params.shoesId;
  const [shoes, setShoes] = useState({});
  const [resultArray, setResultArray] = useState([]);
  const [itemsForPurchaseAvailable, setItemsForPurchaseAvailable] = useState(false);
  function fillRows(dict) {
    for (var key in dict) {
        var sizes = key;
        var quantity = dict[key][0];
        var price = dict[key][1];
        arrayR.push({sizes, quantity, price});
    }
     setResultArray(arrayR);
     if(arrayR.length > 0){
       console.log(arrayR.length);
      setItemsForPurchaseAvailable(true);
      console.log(itemsForPurchaseAvailable);
     }
     console.log(itemsForPurchaseAvailable);
  }
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

  useEffect(async () => {
    Axios.get(`/getSizeAndPrice/${shoeId}`)
        .then((res) => {
           const dict = {};
            for (var i = 0; i < res.data.length; i++) {
              if (!dict.hasOwnProperty(res.data[i].size)) {
                  dict[res.data[i].size] = [1, res.data[i].price];
              }
              else {
                  var qnt = dict[res.data[i].size][0];
                  qnt = qnt + 1;
                  var price = dict[res.data[i].size][1];
                  if(res.data[i].price < dict[res.data[i].size][1]){
                      price = res.data[i].price;
                  }
                  dict[res.data[i].size] = [qnt, price];
              }
          }
          fillRows(dict);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  return (
      <React.Fragment>
    <div className="detailPage">
      <div className="priceTable">
        <SizeQuantityPriceTable
        resultArray={resultArray}
        itemsForPurchaseAvailable={itemsForPurchaseAvailable}
        />
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
          {itemsForPurchaseAvailable && (
          <Link
            to={{
              pathname: '/productBuyPage',
              state: {
                shoe: shoes,
              },
            }}
          >
          <button className="buy">Click to Buy</button>
          </Link>)}
            {!itemsForPurchaseAvailable && (
                <Tooltip title={"no items to buy"} arrow placement={"top"}>
                 <button className="buy" style={{background:"gray",cursor:"auto"}} disabled={true}>Click to Buy</button>
                </Tooltip>
            )}
        </div>
      </div>
      </div>
          {user && 
              <div style={{gridColumn: "span 2"}}>
                  <Recommended f={true}/>
              </div>
          }

      </React.Fragment>
  );
}
