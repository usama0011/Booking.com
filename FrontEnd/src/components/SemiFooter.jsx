import React from 'react'
import '../styles/SemiFooter.css'
const SemiFooter = () => {
    return (
        <div className='semi_ftr'>
            <h3>Save time,save money!</h3>
            <p>Sign up and we'll send the best deals to you</p>
            <div className="l">
                <input type="text" placeholder='Your email' />
                <button>Subscribe</button>
            </div>
            <div className="link_chek">
                <input type="checkbox" name="" id="" />
                <p>Send me a link ot get the Free Booking.com app!</p>
            </div>
        </div>
    )
}

export default SemiFooter