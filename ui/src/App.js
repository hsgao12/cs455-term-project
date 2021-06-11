import React, {useState} from 'react';
import ReleasesGrid from './components/upcoming-releases/ReleasesCarousel';
import Login from './components/login/Login'
import {Modal} from "@material-ui/core";

function App() {
    const [loginFormOpen,setLoginFormOpen] = useState(false);

    return (
        <div className="App">
            <ReleasesGrid/>
            <Modal open={loginFormOpen} onClose={()=>setLoginFormOpen(false)}>
                <Login/>
            </Modal>
            <button onClick={()=>setLoginFormOpen(true)}>temporary login button</button>
        </div>
    );
}

export default App;
