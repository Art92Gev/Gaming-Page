import React from 'react';
import logo from './img/logo.jpg';
import { FaSearch } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="headerImage">
                <img src={logo} alt="" />
            </div>
            <div className="hLeft"><FaSearch /></div>
            <div className="hCenter">
                <div className="hl">
                    <nav>
                        <div className="nav">
                            <span>follow us on:</span>
                            <a target='_blank' href="https://playerx.qodeinteractive.com/elementor/"><ImFacebook2 /></a>
                            <a target='_blank' href="https://playerx.qodeinteractive.com/elementor/"><FaSquareTwitter /></a>
                            <a target='_blank' href="https://playerx.qodeinteractive.com/elementor/"><FaYoutube /></a>
                            <a target='_blank' href="https://playerx.qodeinteractive.com/elementor/"><FaSquareInstagram /></a>
                            <a target='_blank' href="https://playerx.qodeinteractive.com/elementor/"><TiMessages /></a>
                        </div>
                    </nav>
                    <div className="hdown"></div>
                </div>
                <div className="hr">
                    <nav>
                        <div className="nav">
                            <span>this is playerx, a theme for games clans s esports</span>
                        </div>
                    </nav>
                    <div className="hdown"></div>
                </div>
            </div>
            <div className="hRight"><AiFillAppstore /></div>
        </header>
    )
}