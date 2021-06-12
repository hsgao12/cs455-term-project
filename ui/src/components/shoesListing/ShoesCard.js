import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: "95%",
        margin: "auto",
    },
    media: {
        height: "15rem",
        width: "100%"
    },
    title: {
        textAlign: "center",
        ["background-color"]: "#4caf50",
    },

    dateText: {
        display: "inline-block",
    },

    buyButton: {
        float: "right",
    },

    content: {
        ["background-color"]: "white",

    }

});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4caf50'
        },
        secondary: {
            main: '#FFFFFF'
        }
    },
});


export default function ShoesCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader title={props.oShoes.name} className={classes.title}/>
            <CardMedia
                className={classes.media}
                image= {props.oShoes.img}
                title= {props.oShoes.name}
            />
            <CardContent className={classes.content}>
                <Typography variant="h5" className = {classes.dateText}>
                    Lowest Asking: {props.oShoes.price}
                </Typography>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className = {classes.buyButton}>Buy Now</Button>
                </ThemeProvider>
            </CardContent>

        </Card>
    );
}
