import React from 'react'
import '../styles/NavBar.css'
import { FaBed, FaCalendarAlt, FaCar, FaChevronDown, FaChevronUp, FaIgloo, FaModx, FaPlane, FaUser, } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const NavBar = ({ showIt }) => {
    const navigate = useNavigate()
    const handletoLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    return (
        <div className='outerContainer__nav'>
            <div className="inner__container__nav">
                <div className="bottom__nav">
                    <div className="singe_part active">
                        <FaBed className='f_icon' />
                        <p>Stays</p>
                    </div>
                    <div className="singe_part">
                        <FaPlane className='f_icon' />
                        <p>Flights</p>
                    </div>
                    <div className="singe_part">
                        <FaCar className='f_icon' />
                        <p>Cart Rents</p>
                    </div>
                    <div className="singe_part">
                        <FaIgloo className='f_icon' />
                        <p>Attractions</p>
                    </div>
                    <div className="singe_part">
                        <FaModx className='f_icon' />
                        <p>Airports</p>
                    </div>
                </div>
                {showIt &&
                    <div className="company_name">
                        <h1>Where to next, usama?</h1>
                        <p>Find exclusive Genius rewards in every corner of the world!</p>
                        <button onClick={handletoLogin} style={{ padding: '13px 15px', cursor: 'pointer', border: 'none', margin: '15px 0px' }}>LOGIN / REGISTER</button>
                    </div>
                }



            </div>
        </div>
    )
}

export default NavBar