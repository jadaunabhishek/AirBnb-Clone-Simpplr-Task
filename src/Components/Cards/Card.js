import React from 'react'
import hotel from "../../Assets/hotels/hotel-1.jpeg";
import hotel2 from "../../Assets/hotels/hotel-2.jpeg";
import hotel3 from "../../Assets/hotels/hotel-3.jpeg";
import hotel4 from "../../Assets/hotels/hotel-4.jpeg";
import hotel5 from "../../Assets/hotels/hotel-5.jpeg";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function Card({Card}) {
  return (
    <div> 
    <div className='card-box mb-4'>
      <img src={hotel} className='card-img' />
      <div className='card-info-flex'>
        <h4 className='card-title'>Place</h4>
        <div className='card-rating'>
            <StarRateRoundedIcon/>
            <p>4.8</p>
        </div>
      </div>
      <p style={{margin: 0, color: "var(--font-grey)"}}>Beach and sea views</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>19-25 May</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>
        <span style={{fontWeight: "600"}}>₹20,000</span> night
      </p>
    </div>

    
    <div className='card-box mb-4'>
      <img src={hotel2} className='card-img' />
      <div className='card-info-flex'>
        <h4 className='card-title'>Place</h4>
        <div className='card-rating'>
            <StarRateRoundedIcon/>
            <p>4.8</p>
        </div>
      </div>
      <p style={{margin: 0, color: "var(--font-grey)"}}>Beach and sea views</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>19-25 May</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>
        <span style={{fontWeight: "600"}}>₹20,000</span> night
      </p>
    </div>


    <div className='card-box mb-4'>
      <img src={hotel3} className='card-img' />
      <div className='card-info-flex'>
        <h4 className='card-title'>Place</h4>
        <div className='card-rating'>
            <StarRateRoundedIcon/>
            <p>4.8</p>
        </div>
      </div>
      <p style={{margin: 0, color: "var(--font-grey)"}}>Beach and sea views</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>19-25 May</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>
        <span style={{fontWeight: "600"}}>₹20,000</span> night
      </p>
    </div>


    <div className='card-box mb-4'>
      <img src={hotel4} className='card-img' />
      <div className='card-info-flex'>
        <h4 className='card-title'>Place</h4>
        <div className='card-rating'>
            <StarRateRoundedIcon/>
            <p>4.8</p>
        </div>
      </div>
      <p style={{margin: 0, color: "var(--font-grey)"}}>Beach and sea views</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>19-25 May</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>
        <span style={{fontWeight: "600"}}>₹20,000</span> night
      </p>
    </div>


    <div className='card-box mb-4'>
      <img src={hotel5} className='card-img' />
      <div className='card-info-flex'>
        <h4 className='card-title'>Place</h4>
        <div className='card-rating'>
            <StarRateRoundedIcon/>
            <p>4.8</p>
        </div>
      </div>
      <p style={{margin: 0, color: "var(--font-grey)"}}>Beach and sea views</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>19-25 May</p>
      <p style={{margin: 0, color: "var(--font-grey)"}}>
        <span style={{fontWeight: "600"}}>₹20,000</span> night
      </p>
    </div>
    </div>
  )
}
