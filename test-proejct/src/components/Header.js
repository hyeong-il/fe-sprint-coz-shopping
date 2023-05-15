import React, {useState} from "react";
import Dropdown from "./Dropdown";
import { RxHamburgerMenu} from "react-icons/rx";

export default function Header() {
    const [view, setView] = useState(false);
    return(
        <div className='header-container'>
            <a href='/'>
                <img className='logo' src='image/logo.png' alt='로고'></img>
            </a>
            <div className='shopping_name'>COZ Shopping</div>
            <div className='hamburger_menu' onClick={() =>
            {setView(!view)}}>
                    <RxHamburgerMenu size="34"/>
                    {view && <Dropdown/>}
            </div>
        </div>
    );
}