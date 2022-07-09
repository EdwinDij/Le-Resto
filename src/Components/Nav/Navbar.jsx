import React from 'react'
import './Style/Navbar.scss'
import { Link } from "react-router-dom";
import imgHeader from "../assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg"

export default function Navbar() {
    return (
        <div className='headernav'>
            <div className="header">
            <img className="img-restaurant" src={imgHeader} alt="restaurant" />
            </div>
            <nav className='navbar'>
                <div className='list-navbar'>
                       <div>Nos menus</div>
                    <div>
                        Nos Chefs
                    </div>
                    <div>
                        Nos valeurs
                    </div>
                    <div>
                        Réserver une table
                    </div>
                    <div>
                        Nous contacter
                    </div>
                </div>
            </nav>
        </div>
    )
}
