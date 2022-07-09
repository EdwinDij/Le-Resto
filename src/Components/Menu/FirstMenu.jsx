import React from 'react'
import FirstFood from "../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg"

export default function firstMenu() {
  return (
    <div className="first-meal">
      <h1 className="title-zone">
        Les entrées
      </h1>
      <div className="presentation-menu">
        <img className="img-menu" src={FirstFood} alt="entré" />
        <div className='subtile-menu'>
          <p className='presentation'>
            Lorem ipsum dolor sit amet.
            Quo illo harum aut illo recusandae et deserunt culpa vel
            aspernatur voluptas quo maxime possimus ut aliquam officia!
            Et officiis fugiat sit velit voluptatum et molestiae fuga aut
            rerum voluptatem non omnis eligendi rem
            voluptatem nulla ut itaque harum. Aut enim obcaecati
            et tenetur alias aut possimus omnis et molestiae tenetur.
          </p>
          <div className="menu">
            <ul className='menu-list'>
              <li className='menu-item'>
                <div className='menu-title'>
                  <div className="menu-text-price">
                    <span className="text-menu">
                      lorem
                    </span>
                    <span className="price-menu">99€</span>
                  </div>
                  <p className='subtitle-menu'>  Lorem ipsum dolor sit amet. <br></br>
                    (lorem lorem)
                  </p>
                </div>
              </li>
              <li className='menu-item'>
                <div className='menu-title'>
                  <div className="menu-text-price">
                    <span className="text-menu">
                      lorem
                    </span>
                    <span className="price-menu">76€</span>
                  </div>
                  <p className='subtitle-menu'>  Lorem ipsum dolor sit amet. <br></br>
                    (lorem lorem)
                  </p>
                </div>
              </li>
              <li className='menu-item'>
                <div className='menu-title'>
                  <div className="menu-text-price">
                    <span className="text-menu">
                      lorem
                    </span>
                    <span className="price-menu">62€</span>
                  </div>
                  <p className='subtitle-menu'>  Lorem ipsum dolor sit amet. <br></br>
                    (lorem lorem)
                  </p>
                </div>
              </li>
              <li className='menu-item'>
                <div className='menu-title'>
                  <div className="menu-text-price">
                    <span className="text-menu">
                      lorem
                    </span>
                    <span className="price-menu">45€</span>
                  </div>
                  <p className='subtitle-menu'>  Lorem ipsum dolor sit amet. <br></br>
                    (lorem lorem)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
