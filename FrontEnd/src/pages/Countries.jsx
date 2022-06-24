import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaCalendarCheck, FaCalendarMinus, FaCalendarPlus, FaSearch, FaUsers } from 'react-icons/fa'
import { Link, NavLink, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import NavBarItem from '../components/NavBarItem'
import '../styles/Countries.css'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SingleHotel from '../components/SingleHotel'
import Footer from '../components/Footer'
import SemiFooter from '../components/SemiFooter'
import { SearchContext } from '../Context/SearchContext'
const Countries = () => {

    const [route, setRoute] = useState("picks")
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [antherdate, setAnotherDate] = useState(false)
    const [showdate, setShowDate] = useState(false)
    const [date, setMyDate] = useState(location.state.mydate)
    const ref = useRef(null);
    const startref = useRef(null)
    const { adults, children, rooms } = location.state.option;
    const clickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowDate(false)
        }
    }
    const startDateClick = (e) => {
        if (startref.current && !startref.current.contains(e.target)) {
            setAnotherDate(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', clickOutside, true);
        return () => {
            document.removeEventListener('click', clickOutside, true)
        }
    }, [])
    useEffect(() => {
        document.addEventListener('click', startDateClick, true);
        return () => {
            document.removeEventListener('click', startDateClick, true)
        }
    }, [])
    return (
        <>
            <NavBarItem />
            <NavBar />
            <div className="main__contries_part">
                <div className="inner_type">
                    <div className="left__country sick">
                        <h4>Search</h4>
                        <div className="sineg_search">
                            <p>Destinatoin/property name:</p>
                            <div className="inputBox">
                                <FaSearch className='iq' />
                                <input onChange={e => setDestination(e.target.value)} value={destination} type="text" />
                            </div>
                        </div>
                        <div className="sineg_search">
                            <p>Check-in date:</p>
                            <div className="inputBox">
                                <FaCalendarPlus className='iq' />
                                <span onClick={() => setAnotherDate(!antherdate)}>{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
                            </div>
                            {antherdate && <div ref={startref} className='date__contain'>
                                <DateRange editableDateInputs={true} onChange={item => setMyDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />

                            </div>}

                        </div>
                        <div className="sineg_search">
                            <p>Check-out date:</p>
                            <div className="inputBox">
                                <FaCalendarMinus className='iq' />
                                <span onClick={() => setShowDate(!showdate)}>{`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            </div>
                            {showdate &&
                                <div ref={ref} className="date__contain">
                                    <DateRange editableDateInputs={true} onChange={item => setMyDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
                                </div>
                            }
                        </div>
                        <div className="sineg_search">
                            <p>persons:</p>
                            <div className="inputBox">
                                <FaUsers className='iq' />
                                <span>{`${adults} adults ${children} chidlrens ${rooms} rooms`}</span>

                            </div>
                        </div>
                        <div className="sineg_search bbb">
                            <button>Search</button>
                        </div>

                    </div>
                    <div className="left__right">
                        <div className="inner__hotels">
                            <h3>{location.state.destination} 266 properties found</h3>
                            <div className="buttons__list">
                                <button style={route === "picks" ? { backgroundColor: "#0071c2", color: 'white' } : { backgroundColor: '#efefef', color: 'black' }} onClick={() => setRoute("picks")}>Our Top Picks</button>
                                <button style={route === "home" ? { backgroundColor: "#0071c2", color: 'white' } : { backgroundColor: '#efefef', color: 'black' }} onClick={() => setRoute("home")}>Homes & apartments first</button>
                                <button style={route === "starhigh" ? { backgroundColor: "#0071c2", color: 'white' } : { backgroundColor: '#efefef', color: 'black' }} onClick={() => setRoute("starhigh")}>Stars(highest first)</button>
                                <button style={route === "starlow" ? { backgroundColor: "#0071c2", color: 'white' } : { backgroundColor: '#efefef', color: 'black' }} onClick={() => setRoute("starlow")}>stars(lowest first)</button>
                            </div>
                            {route === "picks" && <OurTopPicks />}
                            {route === "home" && <HomeandAppartment />}
                            {route === "starhigh" && <StartHighRating />}
                            {route === "starlow" && <StarLowRating />}
                        </div>
                    </div>
                </div>
            </div>
            <SemiFooter />
            <Footer />
        </>
    )
}

export default Countries

const OurTopPicks = () => {
    return (
        <div>
            <NavLink to={`/country/1`}>
                <SingleHotel ID={1} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/323415402.webp?k=a56e96a33bd7638278fbad4c261832042d1d6a3458c0011193160f0ecfabc637&o=&s=1" title="Rose Place Hotel,Gulberg" rating={5} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="Gulerg,lahore" distance="5.4 km form center" brand="Travel Sustainable property" roomName="Deluxe King Room" roomtype="1 queen bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
            </NavLink>

            <SingleHotel ID={2} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/263862911.webp?k=f0dda45f29d3e227afdce9d2d7cefb81051394986369ac4344be85aa04cd3f86&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
            <SingleHotel ID={3} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/278504590.webp?k=e3ea5148cad39201d132e7697ab719dc6c6fa77297178146168811b59c2bebba&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
            <SingleHotel ID={4} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/318774477.webp?k=157e9838f878b4751acefbfd11f76d0d9abe1f3554bcbd0c5fc0b0374140e791&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
        </div>
    )
}
const HomeandAppartment = () => {
    return (
        <div>
            <SingleHotel ID={5} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/235903951.webp?k=a17b27aa8a20f362a3745c87c66fe5fc84327f5269db14a26b3908ffa68cccd6&o=&s=1" title="Rose Place Hotel,Gulberg" rating={5} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="Gulerg,lahore" distance="5.4 km form center" brand="Travel Sustainable property" roomName="Deluxe King Room" roomtype="1 queen bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />

        </div>
    )
}
const StartHighRating = () => {
    return (
        <div>
            <SingleHotel ID={6} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/172271641.webp?k=e05035b45fadface5bd9c58324f124e6abe319f2b6f361d215b5351f70a68119&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
        </div>
    )
}
const StarLowRating = () => {
    return (
        <div>
            <SingleHotel ID={7} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/133052969.webp?k=2cdf3e6c11e770f75e35317353eaa232721e8c333d1291ff22c66c6f39a1bce4&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
            <SingleHotel ID={8} Image="https://t-cf.bstatic.com/xdata/images/hotel/square200/320359823.webp?k=c9756bd6b6fecbfae2a0265acf350e3c6a5773cb805f891728c8e858ab23dd70&o=&s=1" title="Rose Palace Hotel, Garden Town" rating={4} ratingStatus="Very Good" ratingPoints={5.5} TotalReviews={44} location="lahore" distance="6.6 km form center" brand="Travel Sustainable property" roomName="Deluxe Room" roomtype="1 king bed" cutPrice="30,000" price="15,720" taxprice="2,515" foodStatus="Breakfast included" earncredict={555} />
        </div>
    )
}