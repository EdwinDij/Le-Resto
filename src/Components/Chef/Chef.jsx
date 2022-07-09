import { React ,useState } from 'react'
import chef1 from'../assets/mae-mu-rgRbqFweGF0-unsplash.jpg'
import chef2 from '../assets/john-fornander-jJIb2e7Jkcs-unsplash.jpg'
import chef3 from '../assets/jason-leung--eKZLpj7U0E-unsplash.jpg'
import './Style/chef.scss'

export default function Chef() {
    const [firstChef, setFirstchef] = useState(false)
    const [secondChef, setSecondChef] = useState(false)
    const [thirdChef, setthirdChef] = useState(false)

  return (
    <div className='chef-component'>
        <h1 className='' id="nos-chefs">
            Nos Chefs
        </h1>
        <div className="cards chef chef-position1">
            <div className="chef-presentation">
                <h2 className="name">
                    lori ardi
                </h2>
                <p className="chef-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus fugit recusandae minus quia iure neque illo tempore saepe atque, maiores repudiandae. Dolores aliquam est corporis tempora blanditiis nulla a?
                </p>
            </div>
            <img className="chef-picture" src={chef1} alt='chef'/>
        </div>
        <div className="cards chef-reverse chef-position2">
            <div className="chef-presentation">
                <h2 className="name">
                    lori ardi
                </h2>
                <p className="chef-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus fugit recusandae minus quia iure neque illo tempore saepe atque, maiores repudiandae. Dolores aliquam est corporis tempora blanditiis nulla a?
                </p>
            </div>
            <img className="chef-picture" src={chef2} alt='chef'/>
        </div>
        <div className="cards chef chef-position3">
            <div className="chef-presentation">
                <h2 className="name">
                    lori ardi
                </h2>
                <p className="chef-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus fugit recusandae minus quia iure neque illo tempore saepe atque, maiores repudiandae. Dolores aliquam est corporis tempora blanditiis nulla a?
                </p>
            </div>
            <img className="chef-picture" src={chef3} alt='chef'/>
        </div>
    </div>
  )
}
