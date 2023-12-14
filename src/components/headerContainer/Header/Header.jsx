import React, {useEffect, useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import css from "./Header.module.css";
import {ChangeTheme} from "../ChangeTheme";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Swipe handler:
    useEffect(() => {
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;

        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        })
        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;
            if (
                startTouchX < 100 && Math.abs(endTouchY - startTouchY) < 40 && endTouchX > startTouchX
            ) {
                setIsOpen(true)
            }
            ;
            if (
                startTouchX > 240 && Math.abs(endTouchY - startTouchY) < 40 && endTouchX < startTouchX
            ) {
                setIsOpen(false)
            }
            ;

        })


    }, []);


    return (
        <header className={css.header}>
            <span className={css.header__logo}>Logo</span>
            {/*{isOpen?[css.header__nav,css.header__nav_active].join(" "): css.header__nav}*/}
            <nav className={isOpen ? [css.header__nav, css.header__nav_active].join(" ") : css.header__nav}>
                <ul className={css.header__nav_list}>
                    <li className={css.header__nav_item}>Main</li>
                    <li className={css.header__nav_item}>About</li>
                    <li className={css.header__nav_item}>Address</li>
                    <li className={css.header__nav_item}>Login</li>
                    <li className={css.header__nav_item}><ChangeTheme/></li>
                </ul>
            </nav>
            <button className={css.header__btn} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose size={25} color={"var(--border)"}/> :
                    <AiOutlineMenu size={25} color={"var(--border)"}/>}
            </button>
        </header>
    );
};

export {Header};