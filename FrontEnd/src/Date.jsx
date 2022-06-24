import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { FaBed, FaCalendarAlt, FaUser } from 'react-icons/fa'
import '../src/styles/Date.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from './Context/SearchContext'

const Date = () => {

    const { dispatch } = useContext(SearchContext);
    var startDate = new window.Date();
    var endDate = new window.Date();
    var myFreshDate = new window.Date()
    const ref = useRef()
    const [showDatPiker, setshowDatePicker] = useState(false)
    const [destination, setDestination] = useState("")
    const [option, setOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1
    })
    const [showperson, setshowperson] = useState(false)
    const [mydate, setMyDate] = useState([
        {
            startDate: startDate,
            endDate: endDate,
            key: 'selection'
        },
    ])
    const navigate = useNavigate()
    const handleDatePiker = () => {
        setshowDatePicker((prev) => !prev)
    }
    const handleClick = (state, operator) => {
        console.log([state])
        setOptions((prev) => {
            return {
                ...prev,
                [state]: operator === 'i' ? option[state] + 1 : option[state] - 1,

            }
        })
    }
    const handleperson = () => {
        setshowperson(prv => !prv)
    }
    const handleNavite = (e) => {
        e.preventDefault()
        dispatch({ type: "NEW_SEARCH", payload: { destination, mydate, option } })
        navigate("/countries", { state: { option, mydate, destination } })
    }
    const handleclickDetectoutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setshowperson(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleclickDetectoutside, true)
        return () => {
            document.removeEventListener('click', handleclickDetectoutside, true)
        }
    }, [])
    return (
        <div className="outer__date">
            <div className="date__inner">
                <div className='one'>
                    <FaBed className='myik' />
                    <input required autoComplete='off' onChange={e => setDestination(e.target.value)} type="text" placeholder='Where are you going' />
                </div>
                <div className='two'>
                    <FaCalendarAlt className='myik' />
                    <span onClick={handleDatePiker} className='fl'>{`${format(mydate[0].startDate, "dd/MM/yyyy")} to ${format(mydate[0].endDate, "dd/MM/yyyy")}`}</span>
                    {showDatPiker && <span className="ab_daate">
                        <DateRange minDate={myFreshDate} editableDateInputs={true} onChange={item => setMyDate([item.selection])} moveRangeOnFirstSelection={false} ranges={mydate} />
                    </span>}
                </div>
                <div className='three'>
                    <FaUser className='myik' />
                    <span onClick={() => setshowperson((prev) => !prev)}>{`${option.adults} adults`}</span>
                    <span onClick={() => setshowperson((prev) => !prev)}>{`${option.children} children`}</span>
                    <span onClick={() => setshowperson((prev) => !prev)}>{`${option.rooms} rooms`}</span>
                    {showperson && <span ref={ref} className="absolute">
                        <div className="singleitem">
                            <p>Adults</p>
                            <div className='rr'>
                                <button disabled={option.adults <= 1} onClick={() => handleClick("adults", 'd')}>-</button>
                                <span>{option.adults}</span>
                                <button onClick={() => handleClick("adults", 'i')}>+</button>
                            </div>
                        </div>
                        <div className="singleitem">
                            <p>Chidlrens</p>
                            <div className='rr'>
                                <button disabled={option.children <= 0} onClick={() => handleClick("children", 'd')}>-</button>
                                <span>{option.children}</span>
                                <button onClick={() => handleClick("children", 'i')}>+</button>
                            </div>
                        </div>
                        <div className="singleitem">
                            <p>Rooms</p>
                            <div className='rr'>
                                <button disabled={option.rooms <= 1} onClick={() => handleClick("rooms", 'd')}>-</button>
                                <span>{option.rooms}</span>
                                <button onClick={() => handleClick("rooms", 'i')}>+</button>
                            </div>
                        </div>
                    </span>}
                </div>
                <div className='four'>
                    <button disabled={!destination || !mydate || !option} onClick={handleNavite}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Date