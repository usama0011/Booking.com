import React from 'react'
import { FaCross, FaCrosshairs, FaCut, FaDoorClosed } from 'react-icons/fa'
import '../styles/alert.css'
const Subscrible = () => {
    return (
        <div className='border'>
            <div className="sub_left">
                <img className='im_img' src="https://cdn-icons.flaticon.com/png/512/3782/premium/3782270.png?token=exp=1655553879~hmac=86db45e213468a7dadc234bcc88916ce" alt="" />
                <div className="main_sub">
                    <h4>Subscribee to see Secret Deals</h4>
                    <p>Prices drop the second you sign up!</p>
                    <div className="inpubtt">
                        <input type="text" placeholder='Enter email' />
                        <button>Sign me up!</button>
                    </div>
                </div>
            </div>
            <div className="sub_right">
                <FaCut className='ic' />
            </div>

        </div>
    )
}

export default Subscrible