import React from 'react'
import { FaChevronRight, FaLeaf } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../styles/SingleHotel.css'
const SingleHotel = ({ ID, Image, title, rating, ratingStatus, ratingPoints, TotalReviews, location, distance, brand, roomName, roomtype, cutPrice, price, taxprice, foodStatus, navLink, cencelStatus, earncredict }) => {
    return (
        <>

            <div id={ID} className='hotel_mainContainer'>
                <div className='first_hotel'>
                    <img src={Image} alt={title} />
                </div>
                <div className='seond__div'>
                    <div className="hote__top">
                        <div className="htl">
                            <h3>{title}</h3>
                            <p>{rating}</p>
                        </div>
                        <div className="htr">
                            <div className="bl">
                                <p>{ratingStatus}</p>
                                <p>{TotalReviews}reviews</p>
                            </div>
                            <div className="br">{ratingPoints}</div>
                        </div>
                    </div>
                    <div className="hote_second">
                        <p>{location}</p><p>show on map</p><p>{distance}</p>
                    </div>
                    <div className="hote_third">
                        <FaLeaf /> <p>{brand}</p>
                    </div>
                    <div className="hote_fouth">
                        <p>Gateway Deal</p>
                    </div>
                    <div className="hotel_fifth">
                        <div className="fifthleft">
                            <p>{roomName}</p>
                            <p>{roomtype}</p>
                        </div>
                        <div className="fifthright">
                            <div className="houp">
                                <p><s>{cutPrice}</s></p>
                                <p>PKR {price}</p>
                            </div>
                            <div className="obbt">
                                <p>+{taxprice} taxes and  charges</p>
                            </div>
                        </div>
                    </div>
                    <div className="hotel_siz">
                        <div className="six_llef">
                            <p>{foodStatus}</p>
                            <p>FREE cancellation . No prepament needed</p>
                            <p>you can cencel later, so lock in the great price today!</p>
                        </div>
                        <div className="six_right">
                            <p>Earn {earncredict} Credits</p>
                        </div>
                    </div>
                    <div className="avaiable">
                        <button>See Availability <FaChevronRight className='foo' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleHotel