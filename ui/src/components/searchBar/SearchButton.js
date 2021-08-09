import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import SearchBar from "./SearchBar";
import SearchIcon from '@material-ui/icons/Search';

function SearchButton() {
    const [Open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <SearchIcon onClick={() => setOpen(true)} size={'large'}>
                Login
            </SearchIcon>
            <Modal open={Open} onClose={() => setOpen(false)}>
                <SearchBar setOpen={setOpen}/>
            </Modal>
        </React.Fragment>
    );
}

export default SearchButton;