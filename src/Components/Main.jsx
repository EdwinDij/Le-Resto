import { React, useState } from 'react'
import Navbar from './Nav/Navbar'
import Starter from "./Menu/FirstMenu"
import Dish from './Menu/MainMenu'
import Dessert from './Menu/Dessert'


export default function Main() {
  const [starter, setStarter] = useState(true)
  const [dish, setDish] = useState(false)
  const [dessert, setDessert] = useState(false)

  const handleModals = (e) => {
    if (e.target.id === "dish") {
      setDish(true);
      setStarter(false);
      setDessert(false);
    } else if (e.target.id === "starter") {
      setStarter(true);
      setDish(false);
      setDessert(false);
    } else if (e.target.id === "dessert") {
      setDessert(true)
      setDish(false)
      setStarter(false)
    }
  };

  return (
    <div className='Main'>
      <Navbar />
      <div className="menu-components">
        {starter &&<Starter />}
        {dish &&<Dish />}
        {dessert &&<Dessert />}

        <div className="selection">
          <button className='select-menu'
            onClick={handleModals}
            id="starter"
          >
            Les entrées
          </button>
          <button className='select-menu'
            onClick={handleModals}
            id="dish"
          >
            Les plats
          </button>
          <button className='select-menu'
            onClick={handleModals}
            id="dessert"
          >
            Les desserts
          </button>
        </div>
      </div>
    </div>
  )
}
