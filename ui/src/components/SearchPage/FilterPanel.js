import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import "./FilterPanel.css";



var sizeOptions =
    {
        '1': false,
        '1.5': false,
        '2': false,
        '2.5': false,
        '3': false,
        '3.5': false,
        '4': false,
        '4.5': false,
        '5': false,
        '5.5': false,
        '6': false,
        '6.5': false,
        '7': false,
        '7.5': false,
        '8': false,
        '8.5': false,
        '9': false,
        '9.5': false,
        '10': false,
        '10.5': false,
        '11': false,
        '11.5': false,
        '12': false,
        '12.5': false,
        '13': false,
        '13.5': false,
        '14': false,
        '14.5': false,
        '15': false,
        '16': false,
        '17': false,
        '18': false
    };

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));


export default function FilterPanel(props) {
    const classes = useStyles();
    const [selectedSize, setSelectedSize] = useState(sizeOptions);
    const [selectedPrice, setSelectedPrice] = useState({
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false,
        sixth : false,
        seventh: false
    });

    const  handleSize = (num) => {
        let newSizeFilter = {...sizeOptions};
        if(selectedSize[num] == false) {
            newSizeFilter[num] = !newSizeFilter[num];
            setSelectedSize({...newSizeFilter});
            props.handleFilter({selected:num}, "size");
        }else {
            newSizeFilter[num] = !selectedSize[num];
            setSelectedSize({...newSizeFilter});
            props.handleFilter({}, "size");
        }

    }

    const handleChange = (event) => {
        selectedPrice[event.target.name] = event.target.checked;
        setSelectedPrice({...selectedPrice});
        props.handleFilter(selectedPrice, "price");
    };

    const {first, second, third, forth, fifth, sixth, seventh} = selectedPrice;

    return (
        <div>
            <div className='sizebtns'>
                <h2>SIZES</h2>
                <div className='btnGroup'>
                    <button className={selectedSize["1"] ? "sizebtnSelected" : "sizebtn"} id='1' onClick={() => {handleSize('1')}}>1</button>
                    <button className={selectedSize["1.5"] ? "sizebtnSelected" : "sizebtn"} id='1.5' onClick={() => {handleSize('1.5')}}>1.5</button>
                    <button className={selectedSize["2"] ? "sizebtnSelected" : "sizebtn"} id='2' onClick={() => {handleSize('2')}}>2</button>
                    <button className={selectedSize["2.5"] ? "sizebtnSelected" : "sizebtn"} id='2.5' onClick={() => {handleSize('2.5')}}>2.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["3"] ? "sizebtnSelected" : "sizebtn"} id='3' onClick={() => {handleSize('3')}}>3</button>
                    <button className={selectedSize["3.5"] ? "sizebtnSelected" : "sizebtn"} id='3.5' onClick={() => {handleSize('3.5')}}>3.5</button>
                    <button className={selectedSize["4"] ? "sizebtnSelected" : "sizebtn"} id='4' onClick={() => {handleSize('4')}}>4</button>
                    <button className={selectedSize["4.5"] ? "sizebtnSelected" : "sizebtn"} id='4.5' onClick={() => {handleSize('4.5')}}>4.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["5"] ? "sizebtnSelected" : "sizebtn"} id='5' onClick={() => {handleSize('5')}}>5</button>
                    <button className={selectedSize["5.5"] ? "sizebtnSelected" : "sizebtn"} id='5.5' onClick={() => {handleSize('5.5')}}>5.5</button>
                    <button className={selectedSize["6"] ? "sizebtnSelected" : "sizebtn"} id='6' onClick={() => {handleSize('6')}}>6</button>
                    <button className={selectedSize["6.5"] ? "sizebtnSelected" : "sizebtn"} id='6.5' onClick={() => {handleSize('6.5')}}>6.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["7"] ? "sizebtnSelected" : "sizebtn"} id='7' onClick={() => {handleSize('7')}}>7</button>
                    <button className={selectedSize["7.5"] ? "sizebtnSelected" : "sizebtn"} id='7.5' onClick={() => {handleSize('7.5')}}>7.5</button>
                    <button className={selectedSize["8"] ? "sizebtnSelected" : "sizebtn"} id='8' onClick={() => {handleSize('8')}}>8</button>
                    <button className={selectedSize["8.5"] ? "sizebtnSelected" : "sizebtn"} id='8.5' onClick={() => {handleSize('8.5')}}>8.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["9"] ? "sizebtnSelected" : "sizebtn"} id='9' onClick={() => {handleSize('9')}}>9</button>
                    <button className={selectedSize["9.5"] ? "sizebtnSelected" : "sizebtn"} id='9.5' onClick={() => {handleSize('9.5')}}>9.5</button>
                    <button className={selectedSize["10"] ? "sizebtnSelected" : "sizebtn"} id='10' onClick={() => {handleSize('10')}}>10</button>
                    <button className={selectedSize["10.5"] ? "sizebtnSelected" : "sizebtn"} id='10.5' onClick={() => {handleSize('10.5')}}>10.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["11"] ? "sizebtnSelected" : "sizebtn"} id='11' onClick={() => {handleSize('11')}}>11</button>
                    <button className={selectedSize["11.5"] ? "sizebtnSelected" : "sizebtn"} id='11.5' onClick={() => {handleSize('11.5')}}>11.5</button>
                    <button className={selectedSize["12"] ? "sizebtnSelected" : "sizebtn"} id='12' onClick={() => {handleSize('12')}}>12</button>
                    <button className={selectedSize["12.5"] ? "sizebtnSelected" : "sizebtn"} id='12.5' onClick={() => {handleSize('12.5')}}>12.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["13"] ? "sizebtnSelected" : "sizebtn"} id='13' onClick={() => {handleSize('13')}}>13</button>
                    <button className={selectedSize["13.5"] ? "sizebtnSelected" : "sizebtn"} id='13.5' onClick={() => {handleSize('13.5')}}>13.5</button>
                    <button className={selectedSize["14"] ? "sizebtnSelected" : "sizebtn"} id='14' onClick={() => {handleSize('14')}}>14</button>
                    <button className={selectedSize["14.5"] ? "sizebtnSelected" : "sizebtn"} id='14.5' onClick={() => {handleSize('14.5')}}>14.5</button>
                </div>
                <div className='btnGroup'>
                    <button className={selectedSize["15"] ? "sizebtnSelected" : "sizebtn"} id='15' onClick={() => {handleSize('15')}}>15</button>
                    <button className={selectedSize["16"] ? "sizebtnSelected" : "sizebtn"} id='16' onClick={() => {handleSize('16')}}>16</button>
                    <button className={selectedSize["17"] ? "sizebtnSelected" : "sizebtn"} id='17' onClick={() => {handleSize('17')}}>17</button>
                    <button className={selectedSize["18"] ? "sizebtnSelected" : "sizebtn"} id='18' onClick={() => {handleSize('18')}}>18</button>
                </div>
            </div>
            <div className="priceBtn">
            <h2>Prices</h2>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={first} onChange={handleChange} name="first" />}
                            label="Under $100"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={second} onChange={handleChange} name="second" />}
                            label="$100 - $200"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={third} onChange={handleChange} name="third" />}
                            label="$200 - $300"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={forth} onChange={handleChange} name="forth" />}
                            label="$300 - $400"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={fifth} onChange={handleChange} name="fifth" />}
                            label="$400 - $500"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={sixth} onChange={handleChange} name="sixth" />}
                            label="$500 - $600"
                        />
                        <FormControlLabel
                            control={<Checkbox color= "primary" checked={seventh} onChange={handleChange} name="seventh" />}
                            label="Over $600"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            </div>
        </div>
    );
}