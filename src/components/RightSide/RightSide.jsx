import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReiview from '../CustomerReview/CustomerReview'
const RightSide = () => {
  return (
    <div className='RightSide'>
        <h3>Updates</h3>
        <Updates/>
        <CustomerReiview/>
    </div>
  )
}

export default RightSide