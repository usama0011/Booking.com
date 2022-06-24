import React, { useContext } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaInfo, FaInfoCircle, FaMizuni, FaTicketAlt } from 'react-icons/fa'
import Company from '../components/Company'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarItem from '../components/NavBarItem'
import SemiFooter from '../components/SemiFooter'
import Subscrible from '../components/Subscrible'
import { SearchContext } from '../Context/SearchContext'
import Date from '../Date'
import '../styles/Home.css'
const Home = () => {
    document.title = "Booking.com | Official Site | The Best"
    const [showit, setshowIt] = useState(true)
    const [index, setIndex] = useState(0)
    const [newindex, setNewIndex] = useState(0)
    const handleClick = (d) => {
        if (d === 'l') {
            setIndex(index !== 0 ? index - 1 : 7)
        }
        if (d === 'r') {
            setIndex(index !== 7 ? index + 1 : 0)
        }
    }
    const anotherHandle = (d) => {
        if (d === "l") {
            setNewIndex(newindex !== 0 ? newindex - 1 : 3)
        }
        if (d === "r") {
            setNewIndex(newindex !== 3 ? newindex + 1 : 0)
        }
    }
    const SmallCarsolDat = useMemo(() => [
        {
            id: 1,
            name: "Islamabad",
            Image: "https://t-cf.bstatic.com/xdata/images/city/square250/724981.webp?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=",
            properties: "243 properties"
        },
        {
            id: 2,
            name: "Lahore",
            Image: "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "143 properties"
        },
        {
            id: 3,
            name: "Karachi",
            Image: "https://t-cf.bstatic.com/xdata/images/city/square250/724981.webp?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=",
            properties: "943 properties"
        },
        {
            id: 4,
            name: "Peshawar",
            Image: "https://images.unsplash.com/photo-1624911657909-02c92101eebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "53 properties"
        },
        {
            id: 5,
            name: "Faslabad",
            Image: "https://images.unsplash.com/photo-1606574977100-456d9a074578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "443 properties"
        },

        {
            id: 6,
            name: "Swat",
            Image: "https://images.unsplash.com/photo-1596464148416-e0916276a9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "44 properties"
        },

        {
            id: 7,
            name: "Naran",
            Image: "https://images.unsplash.com/photo-1569744405519-ba6615346f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "33 properties"
        },
        {
            id: 8,
            name: "Sakardu",
            Image: "https://images.unsplash.com/photo-1624087315243-8fbb9f90e5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "32 properties"
        },

        {
            id: 9,
            name: "Gilgat",
            Image: "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBha2lzdGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            properties: "23 properties"
        },

    ]
    )
    const PropertyType = useMemo(() => [
        {
            id: 1,
            name: "Hotels",
            img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
            total: "863234 hotels"
        },
        {
            id: 2,
            name: "Apartments",
            img: "https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
            total: "864,236 apartments"
        },
        {
            id: 3,
            name: "Resorts",
            img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
            total: "83234 resorts"
        },
        {
            id: 4,
            name: "Villas",
            img: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
            total: "863234 villas"
        },
        {
            id: 5,
            name: "Cotage",
            img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
            total: "863234 hotels"
        },
        {
            id: 6,
            name: "Cabins",
            img: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
            total: "37634 hotels"
        },
        {
            id: 7,
            name: "Glamping",
            img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
            total: "17634 glampings"
        },
    ])
    return (
        <>
            <NavBarItem />
            <NavBar showIt="hay" />
            <Date />
            <div className="main__container">
                <div className="travel">
                    <input type="checkbox" name="" id="" />
                    <p>I'm traveling for  work</p>
                </div>
                <div className="covid__box">
                    <div className="left_box">
                        <FaInfo className='ii' />
                        <p>Get the advice you need. Check the latest COVID-19 restrictions before you <travel className="span">Learn more</travel> </p>
                    </div>
                    <div className="right__box">
                        <FaChevronRight className='icon-small' />
                    </div>
                </div>
                <div className="save">
                    <div className="le_img">
                        <img src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg" alt="" />
                    </div>
                    <div className="right_save">
                        <p>Save 15% or more</p>
                        <p>Plan your dream trip with a Gateway Deal</p>
                        <button>Explore deals</button>
                    </div>
                </div>
                <div className="grid__box">
                    <div className='item1'>
                        <h4>Islamabad</h4>
                    </div>
                    <div className='item2'>
                        <h4>The place of Islam Multan</h4>
                    </div>
                    <div className='item3'>
                        <h4>Karachi</h4>
                    </div>
                    <div className='item4'>
                        <h4>Peshawar</h4>
                    </div>
                    <div className='item5'>
                        <h4>Muree</h4>
                    </div>
                </div>
                <div className="explore__pak">

                    <div onClick={() => handleClick("r")} style={{ right: '0px' }} className="abs">
                        <FaChevronRight className='next' />
                    </div>
                    {index > 0 && <div onClick={() => handleClick("l")} style={{ left: 0 }} className="abs">
                        <FaChevronLeft className='next' />
                    </div>}

                    <h3>Explore Pakistan</h3>
                    <p>These popular destinations have a lot to offer</p>
                    <div style={{ transform: `translateX(${-10 * index}vw)` }} className="innner__explore_container">
                        {SmallCarsolDat.map((item, index) => (
                            <div key={index} className="explore_box">
                                <img src={item.Image} alt={item.name} />
                                <p className='title'>{item.name}</p>
                                <p className='para'>{item.properties}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="browser__by_perperty">
                    <div onClick={() => anotherHandle("r")} style={{ right: '0px' }} className="new">
                        <FaChevronRight className='next' />
                    </div>
                    {newindex > 0 && <div onClick={() => anotherHandle("l")} style={{ left: 0 }} className="new">
                        <FaChevronLeft className='next' />
                    </div>}
                    <h3>Brower by property type</h3>
                    <div style={{ transform: `translateX(${-20 * newindex}vw)` }} className="inner__brower__container">
                        {PropertyType.map((item, i) => (
                            <div key={item.id} className="property_container">
                                <img src={item.img} alt="" />
                                <p className="ti">{item.name}</p>
                                <p className="tii">{item.total}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="genious__box">
                    <div className="up">
                        <div className="upper_left">
                            <span className='fle'><h3>Hi Usama!</h3>you are at <h3>Genius Levee 1</h3></span>
                            <p className='il'>Enjoy <span className='fe'>free lifetime access</span>to a discounts at participationg properties worldwide:</p>
                            <div className="ck">
                                <FaTicketAlt className='iiii' /><span>10% discount</span>
                            </div>
                        </div>
                        <div className="upper__right">
                            <img src="https://t-cf.bstatic.com/static/img/genius/genius-levels/genius-lvl-1-gift.svg" alt="" />
                        </div>
                    </div>
                    <div className="down">
                        <div className="div">
                            <p>booking.com's loyalty <progrm className="span">Learn More</progrm></p>
                        </div>
                        <h3>Genius</h3>
                    </div>
                </div>
                <div className="get_inspire">
                    <div>
                        Iconic Eurovision songs from 6 countries
                        Travel inspired by some of Eurovision’s most iconic pop anthems.</div>
                    <div>
                        7 European landmarks you can’t miss
                        Check these must-see spots off your list.</div>
                    <div>
                        The best of the earth's natural beauty
                        Marvel at the spectacle of mother nature at these fascinating locations.</div>
                </div>
                <div className="destination">
                    <h3>Destination We Love</h3>
                    <Destination />
                </div>
            </div>
            <div className="semi__footer">
                <SemiFooter />
            </div>
            <Footer />
            <div className="company">
                <Company />
            </div>
        </>
    )
}

export default Home