import React from 'react'
import { useState } from 'react'
import '../styles/Destination.css'
const Destination = () => {
    const [singData, setSingleData] = useState("regions")
    console.log(singData);
    const active = {
        backgroundColor: singData ? "slateblue" : "none",
        color: singData ? "white" : "black"
    }
    return (
        <div>
            <div className="dest__top">
                <button style={singData === "regions" ? { backgroundColor: "#003580", color: 'white' } : { backgroundColor: 'transparent', color: 'black' }} onClick={() => setSingleData("regions")}>Regions</button>
                <button style={singData === "cities" ? { backgroundColor: "#003580", color: 'white' } : { backgroundColor: 'transparent', color: 'black' }} className='actk' onClick={() => setSingleData("cities")}>Cities</button>
                <button style={singData === "interest" ? { backgroundColor: "#003580", color: 'white' } : { backgroundColor: 'transparent', color: 'black' }} onClick={() => setSingleData("interest")}>Place of Intrest</button>
            </div>
            <div className="main__dispaly_content">
                {singData === "regions" && <Regions />}
                {singData === "cities" && <Cities />}
                {singData === "interest" && <PlaceOfIntrest />}
            </div>
        </div>
    )
}

export default Destination

const Regions = () => {
    return (
        <>
            <div className='region__con'>
                <ul className='ulll'>
                    <li>
                        <p>Cornwall</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Texle</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>guernesy</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>England</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='ulll'>
                    <li>
                        <p>Lake District</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bali</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Ras al Khainmah</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Zanzibar</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='ulll'>
                    <li>
                        <p>Ibiza</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Jersey</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Mykonsos</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Uttar Pradesh</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='ulll'>
                    <li>
                        <p>Santorinin</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Tenirife</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bihar</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bora Bora</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='ulll'>
                    <li>
                        <p>Isle of Wight</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Phuket Provicne</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Hawaii</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
const Cities = () => {
    return (
        <>
            <div className='city_con'>
                <ul className='city__ul'>
                    <li>
                        <p>Tahoe City, United States of America</p>
                        <p>73 vacation rentals, 69 cottages, 68 villas, 68 vacation homes, 4 apartments</p>
                    </li>
                    <li>
                        <p>Portland, United States of America</p>
                        <p>68 vacation rentals, 44 vacation homes, 44 villas, 44 cottages, 19 apartments</p>
                    </li>
                    <li>
                        <p>Atlantic City, United States of America</p>
                        <p>89 vacation rentals, 53 apartments, 36 cottages, 36 villas, 36 vacation homes</p>
                    </li>
                </ul>
                <ul className='city__ul'>
                    <li>
                        <p>Sacramento, United States of America</p>
                        <p>27 vacation rentals, 13 vacation homes, 13 villas, 13 cottages, 9 apartments</p>
                    </li>
                    <li>
                        <p>Jacksonville, United States of America</p>
                        <p>130 vacation rentals, 67 apartments, 60 villas, 60 cottages, 60 vacation homes</p>
                    </li>
                    <li>
                        <p>Atlanta, United States of America</p>
                        <p>591 vacation rentals, 347 apartments, 229 cottages, 228 villas, 228 vacation homes</p>
                    </li>
                </ul>
                <ul className='city__ul'>
                    <li>
                        <p>Bangkok</p>
                        <p>4040 hotels</p>
                    </li>
                    <li>
                        <p>York</p>
                        <p>4,54 hotels</p>
                    </li>
                    <li>
                        <p>Mykonsos</p>
                        <p>335 hotels</p>
                    </li>
                    <li>
                        <p>Manchaster</p>
                        <p>1087</p>
                    </li>
                </ul>
                <ul className='city__ul'>
                    <li>
                        <p>London</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Liverpool</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Leeds</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Flasgow</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>

            </div>
        </>
    )
}
const PlaceOfIntrest = () => {
    return (
        <>
            <div className='place__intrs'>
                <ul className='int__ull'>
                    <li>
                        <p>Cornwall</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Texle</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>guernesy</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>England</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='int__ull'>
                    <li>
                        <p>Lake District</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bali</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Ras al Khainmah</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Zanzibar</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='int__ull'>
                    <li>
                        <p>Ibiza</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Jersey</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Mykonsos</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Uttar Pradesh</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='int__ull'>
                    <li>
                        <p>Santorinin</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Tenirife</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bihar</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Bora Bora</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
                <ul className='int__ull'>
                    <li>
                        <p>Isle of Wight</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Phuket Provicne</p>
                        <p>4,534 properties</p>
                    </li>
                    <li>
                        <p>Hawaii</p>
                        <p>4,534 properties</p>
                    </li>
                </ul>
            </div>
        </>
    )
}