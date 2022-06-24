import React from 'react'
import { FaRegQuestionCircle, FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/NavBarItem.css'
const NavBarItem = () => {
    return (
        <div className="outer">
            <div className="inner__container__top">
                <div className="top__nav">
                    <div className="top__left__nav">
                        <Link style={{ color: 'white' }} to="/">
                            <h3>Booking.com</h3>
                        </Link>
                    </div>
                    <div className="top__right__nav">
                        <ul>
                            <li className='pkr'>
                                <h3>PKR</h3>
                            </li>
                            <li>
                                <FaRegQuestionCircle className='f_icon' />
                            </li>
                            <li>
                                <img src="https://media.istockphoto.com/photos/pakistan-flag-picture-id182820726?k=20&m=182820726&s=612x612&w=0&h=4Lvgha0Q9Wu_fc4K0Uo5l6tHRl6kXx0mPTGnXLIVuQE=" className='flag' alt="" />
                            </li>
                            <li>
                                <FaRegBell className='f_icon' />
                            </li>
                            <li className='porp'>List Your Property</li>
                        </ul>
                        <div className="customer__box">
                            <span className="u">U</span>
                            <div className="user_des">
                                <h4>Usama Ahamd</h4>
                                <p>Genius Level 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarItem