import {React, useEffect, useState} from 'react'
import Navbar from './Nav/Navbar'
import FirstMenu from "./Menu/FirstMenu"
import MainMenu from './Menu/MainMenu'
import dessert from './Menu/Dessert'
import axios from 'axios'


export default function Main() {


  return (
    <div className='Main'>
      <Navbar />
        <div className="menu-components">
          <FirstMenu />
          <div className="selection">
          <button className='select-menu'>Les entrées</button>
          <button className='select-menu'>Les plats</button>
          <button className='select-menu'>Les desserts</button>
          </div>
        </div>
    </div>
  )
}
