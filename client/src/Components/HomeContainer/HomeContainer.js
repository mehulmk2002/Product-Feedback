import React from 'react'
import icon from '../../assets/main-icon.png'
import './HomeContainer.css'
const HomeContainer = () => {
  return (
    <div className='HomeContainer'>
      <div className='HomeContainer-left banner-img'><img src={icon} alt='icon'/></div>
      <div className='HomeContainer-right'>
        <div className='banner-content'>Add your products and give your valuable feedback</div>
        <div className='sub-banner-content' style={{color:'#6A6A6A'}}>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</div>
      </div>
    </div>
  )
}
 
export default HomeContainer
