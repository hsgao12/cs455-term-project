import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import ShoesCard from "./ShoesCard";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
        },
    },
}));

const shoes = [
    {
        img: '/shoes-images/Adidas-Yeezy360-zyon.webp',
        brand: 'Adidas',
        price: '$500',
        name: 'Yeezy booster 360 V2 Zyon'
    },
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
    },
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
    },
    {
        img: '/shoes-images/Nike-Dunk-Low-Team-Green.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Dunk Low Team Green'
    },
    {
        img: '/shoes-images/Nike-Dunk-Low-UNC-2021-1.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Dunk Low UNC 2021'
    },
    {
        img: '/shoes-images/Nike-Dunk_Low-Green-Glow.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Dunk Low Green Glow'
    },
    {
        img: '/shoes-images/Nike-max97-offwhite.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Air Max 97 Offwhite'
    },
    {
        img: '/shoes-images/Nike-Vaporwaffle-sacai-Sport-Fuchsia-Game-Royal.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Sacai Vaporwaffle Fuchsia Game Royal'
    },
    {
        img: '/shoes-images/Nike-Vaporwaffle-sacai-Tour-Yellow-Stadium-Green.webp',
        brand: 'Nike',
        price: '$500',
        name: 'Sacai Vaporwaffle Tour Yellow Stadium Green'
    },
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
];


export default function ReleasesGrid() {
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
                {shoes.map((shoe => <ShoesCard oShoes={shoe}/>))}

            </Carousel>
        </div>


    )
}