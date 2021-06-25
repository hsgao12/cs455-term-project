import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import Login from "../login/Login";
import Register from "../login/Register";


 function Navbar() {
     const [loginFormOpen,setLoginFormOpen] = useState(false);
     const [registerFormOpen,setRegisterFormOpen] = useState(false);


    return (<div className="NavBar">
        <div className="leftSide">
        <ul className="TopNav">
                <Link className="navList" to="/">
                    <li className ="ListStyle">Home</li>
                </Link>
                <Link className="navList" to="/productPage">
                    <li className ="ListStyle">productDetail</li>
                </Link>

                </ul>
        </div>
        <div className="rightSide">
        <ul className="TopNav">
                <Link className="navList" to="/login">
                <li className ="ListStyle" onClick={()=>setLoginFormOpen(true)}>Login</li>
                </Link>
                <Link className="navList" to="/registration">
                <li className ="ListStyle" onClick={()=>setRegisterFormOpen(true)}>Registration</li>
                </Link>
                </ul>
        </div>
        <Modal open={loginFormOpen} onClose={()=>setLoginFormOpen(false)}>
            <Login/>
        </Modal>
        <Modal open={registerFormOpen} onClose={()=>setRegisterFormOpen(false)}>
            <Register/>
        </Modal>
        </div>)
}
export default Navbar;     