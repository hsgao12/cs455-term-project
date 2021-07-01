import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import ShoesCard from "../shoesListing/ShoesCard";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
        }
    },
}));


const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                img: '/shoes-images/adidas-Yeezy-700-V2-Static-Product-1.webp',
                brand: 'Adidas',
                price: '$500',
                name: 'Yeezy booster 360 V2 Static'
            },
            {
                img: '/shoes-images/adidas-Yeezy-Boost-350-V2-Ash-Pearl.webp',
                brand: 'Adidas',
                price: '$500',
                name: 'Yeezy booster 360 V2 Ash Pearl'
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                img: '/shoes-images/adidas-Yeezy-Boost-350-V2-Lundmark-(Non-Reflective).webp',
                brand: 'Adidas',
                price: '$500',
                name: 'Yeezy booster 360 V2 Landmark (Non-Reflective)'
            },
            {
                img: '/shoes-images/Jordan-4-Retro-Travis-Scott-Purple.webp',
                brand: 'Nike',
                price: '$500',
                name: 'Jordan 4 Retro Travis Scott Purple'
            }
        ]
    },
    {
        Name: "Decoratives",
        Caption: "Give style and color to your living room!",
        contentPosition: "right",
        Items: [
            {
                img: '/shoes-images/nikedunklowMichigan.webp',
                brand: 'Nike',
                price: '$500',
                name: 'Dunk Low Michigan'
            },
            {
                img: '/shoes-images/Nike-Offwhite-Jordan1-chicago.webp',
                brand: 'Nike',
                price: '$500',
                name: 'Jordan 1 Retro Offwhite Chicago'
            }
        ]
    }
]

export default function SuggestProductList() {
    const classes = useStyles();
    return (
        <div className='shoesListDiv'>
            <Carousel
                className={classes.root}
                autoPlay={false}
                animation={"slide"}
                indicators={false}
                NavButtonsAlwaysVisible={true}
                navButtonsAlwaysInvisible={false}
                timeout={500}
            >
                {items.map((shoe => <ShoesCard oShoes={shoe} key={1} contentPosition={shoe.contentPosition} />))}

            </Carousel>
        </div>


    )
}