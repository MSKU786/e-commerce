import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function banner() {
  return (
    <div className="relative ">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        interval={4000}
      >
        <div></div>
      </Carousel>
    </div>
  )
}

export default banner
