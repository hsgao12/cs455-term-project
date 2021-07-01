import {useSelector} from "react-redux";
import React, {useState} from "react";
import {
    IconButton,
    Input,
    makeStyles,
    OutlinedInput,
    TextareaAutosize,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from "@material-ui/core";
import {Label} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-grid",
        gridTemplateColumns: "auto 1fr",
        gridRowGap: "1em",
        gridColumnGap: "0.2em",
        marginTop: "1em",
        "&>div": {
            display: "contents",
            "&>span": {
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto"
            }
        },
        marginBottom: "1em"
    },
    listItemButton: {
        gridColumn: "span 2"
    }

}));

export default function ListItemPage(props) {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();

    const [images, setImages] = useState([]);

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [price, setPrice] = useState(0);

    const onPriceChange = (e) => {
        const newVal = e.target.value;
        try {
            if (newVal === "") {
                setPrice(0);
            } else {
                const num = parseFloat(newVal);
                if (!isNaN(num)) {
                    setPrice(num);
                }
            }
        } catch (e) {

        }

    };

    return <React.Fragment>
        <div className={styles.root} key={"list"}>
            <div>
                <span>Pictures</span>
                <div>
                    <Button color={"primary"} variant={"contained"}> upload</Button>
                </div>
            </div>
            <div>
                <span>Item name</span>
                <OutlinedInput onChange={(e) => setItemName(e.target.value)}>

                </OutlinedInput>
            </div>
            <div>
                <span>Item description</span>
                <TextField
                    multiline={true}
                    variant={"outlined"}
                    rows={5}
                    onChange={(e) => setItemDescription(e.target.value)}
                >
                </TextField>
            </div>
            <div>
                <span>Price</span>
                <OutlinedInput
                    onChange={onPriceChange}
                    type={"numbers"}
                    value={price}
                >

                </OutlinedInput>
            </div>
            <Button className={styles.listItemButton} color={"primary"} variant={"contained"}> List Item</Button>
        </div>
    </React.Fragment>;
}
