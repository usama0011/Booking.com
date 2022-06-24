import React, { useState } from 'react'
import { FaAddressCard, FaCalendarMinus, FaCalendarPlus, FaCentercode, FaChevronDown, FaChevronLeft, FaChevronRight, FaCoffee, FaCookieBite, FaCross, FaDumbbell, FaExclamation, FaExpeditedssl, FaGrinTongueSquint, FaHeart, FaLeaf, FaLocationArrow, FaMap, FaParking, FaRoad, FaSearch, FaShare, FaSmokingBan, FaStar, FaTag, FaThumbsUp, FaTicketAlt, FaTumblr, FaUsers, FaWifi, FaXbox, FaXRay } from 'react-icons/fa'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarItem from '../components/NavBarItem'
import SemiFooter from '../components/SemiFooter'
import '../styles/Country.css'
const Country = () => {
    const [showModel, setShowModel] = useState(false)
    const [ImageNumber, setImageNo] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const handlImageDiv = (id) => {
        setImageNo(id)
    }
    console.log(ImageNumber);
    const ImagesBox = [
        {
            id: 0,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415402.jpg?k=92f0f2dacbd033b22eaa59ea314200ae7420e0d52da9974f0cebbf437dcb3e84&o=&hp=1",
            className: "g_one"
        },
        {
            id: 1,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415584.jpg?k=85e942844a2dd7169edd53e282a6e929b111e59adf9a183266fb56417e723739&o=&hp=1",
            className: "g_two"
        },
        {
            id: 2,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415610.jpg?k=ed7aeea0a34d47616ba424a7ed1e6ffa49aacb78a9988cea2d30df8d8778f7ed&o=&hp=1",
            className: "g_three"
        },
        {
            id: 3,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415428.jpg?k=39498368659ad58740b43606a5d7f9425aab066b9357a90447562a6521c7aae2&o=&hp=1",
            className: "g_four"
        },
        {
            id: 4,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415444.jpg?k=dad183b31fb9c9ee12112f7ec144055d3a834d0052e0c3cd9425fc736ac1d184&o=&hp=1",
            className: "g_five"
        },
        {
            id: 5,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415450.jpg?k=9ac9f9d4aa801abcda787b99d0fbb3d6ca0647d64f57d6bdb5afd31a29f1ee22&o=&hp=1",
            className: "g_six"
        },
        {
            id: 6,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415462.jpg?k=60aec1eef7f2c34f813981894788676a9b8fd3226ab22091c0d3510a9189bcc7&o=&hp=1",
            className: "g_seven"
        }, {
            id: 7,
            Image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323415573.jpg?k=0868570b79d92777dee0f144ddef65c0a8b962185be23ee1d0e9d2a886c02765&o=&hp=1",
            className: "g_eight"
        }

    ]
    const handleModelClick = () => {
        setShowModel(true)
    }
    const handleArrow = (d) => {
        if (d === "l") {
            setImageNo(ImageNumber !== 0 ? ImageNumber - 1 : 7);
        }
        if (d === 'r') {
            setImageNo(ImageNumber !== 7 ? ImageNumber + 1 : 0);
        }
    }
    const ModelClose = () => {
        setShowModel(false)
        setImageNo(0)
    }
    return (
        <>
            <NavBarItem />
            <NavBar />
            <div className="covid_box">
                {showModel && <div className='outerLayout'>
                    <img onClick={ModelClose} className='mee' src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/344/external-close-sales-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="" />
                    <FaChevronLeft onClick={() => handleArrow("l")} className='arro_lar' style={{ left: 0 }} />
                    <div className="innerLayout">
                        <img src={ImagesBox[ImageNumber].Image} alt="" />
                    </div>
                    <FaChevronRight onClick={() => handleArrow("r")} className='arro_lar' style={{ right: 0 }} />
                </div>}

                <div className="inner_covid">
                    <div className="left_box_covid">
                        <FaExclamation />
                        <h4>Coronavius (COVID-19) Support</h4>
                    </div>
                    <div className="right">
                        <FaChevronDown />
                    </div>
                </div>
            </div>
            <div className="main_width_container">
                <div className="main_left mainbax">
                    <div className="info_box">
                        <FaGrinTongueSquint className='gift' />
                        <p>We Price Match</p>
                    </div>
                    <div className="left__country">
                        <h4>Search</h4>
                        <div className="sineg_search">
                            <p>Destinatoin/property name:</p>
                            <div className="inputBox">
                                <FaSearch className='iq' />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="sineg_search">
                            <p>Check-in date:</p>
                            <div className="inputBox">
                                <FaCalendarPlus className='iq' />
                                <span >Check in Date</span>
                            </div>
                        </div>
                        <div className="sineg_search">
                            <p>Check-out date:</p>
                            <div className="inputBox">
                                <FaCalendarMinus className='iq' />
                                <span>Checkout Detail</span>
                            </div>

                        </div>
                        <div className="sineg_search">
                            <p>persons:</p>
                            <div className="inputBox">
                                <FaUsers className='iq' />
                                <span>adults childrens rooms</span>

                            </div>
                        </div>
                        <div className="sineg_search bbb">
                            <button>Search</button>
                        </div>

                    </div>
                </div>
                <div className="main_right">
                    <div className="mainrig_top">
                        <button>Info & Price</button>
                        <button>Facilities</button>
                        <button>House Rues</button>
                        <button>Guest(reviews 1,88)</button>
                    </div>
                    <div className="hotel_header">
                        <div className="header_left">
                            <p>Hotel</p>
                            <h3>Rose Palace Hote, Gulberg</h3>
                            <p><FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                            </p>
                            <p><FaThumbsUp className='thumb' /></p>
                            <p>Genius.</p>
                        </div>
                        <div className="header_right">
                            <FaHeart className='red' />
                            <FaShare className='blue' />
                            <button>Reserve</button>
                        </div>
                    </div>
                    <div className="spnse">
                        <FaLeaf /><p>Tranvel sustainable property</p>
                    </div>
                    <div className="address">
                        <FaRoad className='location' />
                        <p> 55 N, Mini Market Gurumanagat Road, Gulberg-II, Lahore, Gulberg, 54000 Lahore pakistan</p>
                    </div>
                    <div className="gridBox">
                        <div onClick={handleModelClick} className='g_one'>
                            <img onClick={() => handlImageDiv(ImagesBox[0].id)} src={ImagesBox[0].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_two'>
                            <img onClick={() => handlImageDiv(ImagesBox[1].id)} src={ImagesBox[1].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_three'>
                            <img onClick={() => handlImageDiv(ImagesBox[2].id)} src={ImagesBox[2].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_four'>
                            <img onClick={() => handlImageDiv(ImagesBox[3].id)} src={ImagesBox[3].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_five'>
                            <img onClick={() => handlImageDiv(ImagesBox[4].id)} src={ImagesBox[4].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_six'>
                            <img onClick={() => handlImageDiv(ImagesBox[5].id)} src={ImagesBox[5].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_seven'>
                            <img onClick={() => handlImageDiv(ImagesBox[6].id)} src={ImagesBox[6].Image} alt="" />
                        </div>
                        <div onClick={handleModelClick} className='g_eight'>
                            <img onClick={() => handlImageDiv(ImagesBox[7].id)} src={ImagesBox[7].Image} alt="" />
                            <div className="more">
                                +10 more
                            </div>
                        </div>
                    </div>
                    <div className="show__more_us">
                        <p>Located in Lahore, 23 km from Wagah Border, Rose Palace Hotel, Gulberg provides accommodation with a restaurant, free private parking, a fitness centre and a shared lounge. Featuring a garden, the 3-star hotel has air-conditioned rooms with free WiFi. The accommodation features a 24-hour front desk, room service and currency exchange for guests.</p>
                        <p>Guest rooms at the hotel are equipped with a seating area, a flat-screen TV with satellite channels and a private bathroom with slippers and a shower. At Rose Palace Hotel, Gulberg each room has bed linen and towels.</p>
                        {showMore && <p>
                            <ul className='showmoreUl'>
                                <li><FaWifi className='oo' /> Free WiFi</li>
                                <li><FaCookieBite className='oo' /> Room Service</li>
                                <li><FaDumbbell className='oo' /> Room service</li>
                                <li><FaSmokingBan className='oo' /> Super fitness center</li>
                                <li><FaParking className='oo' /> Free Parking</li>
                                <li><FaCoffee className='oo' /> Super breakfast</li>
                            </ul>
                        </p>}
                        <button onClick={() => setShowMore(!showMore)}>Show More</button>

                    </div>
                </div>
            </div>
            <SemiFooter />
            <Footer />
        </>
    )
}

export default Country