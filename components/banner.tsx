import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-gray-100 to-transparent md:h-80" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={4000}
      >
        <div className=" ">
          <img
            className="h-auto w-full object-cover lg:h-screen "
            alt="carosel"
            loading="lazy"
            src="https://img.search.brave.com/LCX_S5nyHgBI0GFCgZf8fc3SE_qW-vJjDGRWppXZIvA/rs:fit:1200:627:1/g:ce/aHR0cDovL2dyYXBo/aWNnb29nbGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEwL0ZhY2Vib29r/LUZhc2hpb24tQmln/LVNhbGUtQmFubmVy/LmpwZw"
          />
        </div>
        <div className="">
          <img
            className="h-auto w-full object-cover lg:h-screen"
            alt="carosel"
            loading="lazy"
            src="https://img.search.brave.com/-ONjvqeCMBapBp2u-agKQpscnqWh22TDNQDHOjEn4jQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzE4/Ni8wMzAvb3JpZ2lu/YWwvc2FsZS1wcm9t/b3Rpb24tcG9zdGVy/LWRlc2lnbi1iYW5u/ZXItdmVjdG9yLWRl/c2lnbi5qcGc"
          />
        </div>
        <div className=" ">
          <img
            className="h-auto w-full object-cover lg:h-screen"
            alt="carosel"
            loading="lazy"
            src="https://img.search.brave.com/lD9O36DFwmrzJYfqzx6B8QDt2dAGnGBXnQmS2MWutOA/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBkLzEw/LzgzLzBkMTA4M2M2/MDg1YmE2ZDgyNTU5/OTQ0NjUyZDRhYTIz/LmpwZw"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
