import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute bottom-0 z-10 h-80 w-full bg-gradient-to-t from-gray-100 to-transparent" />
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
            src="https://img.search.brave.com/1E_As5CbhvvUozqTQHrQGBKQ8jdiw_pTVEpSZmgBlDM/rs:fit:817:490:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzY2/Mi85ODgvbm9uXzJ4/L2Zhc2hpb24tbW9k/ZXJuLXNhbGUtYmFu/bmVyLXZlY3Rvci5q/cGc"
          />
        </div>
        <div className="">
          <img
            className="h-auto w-full object-cover lg:h-screen"
            alt="carosel"
            loading="lazy"
            src="https://img.search.brave.com/GRLHrNRaktPifRauuF_psURTyhsoNbcw6jpKpALBqwI/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTg2ODEw/NzIvMzE5Njkvdi8x/NjAwL2RlcG9zaXRw/aG90b3NfMzE5Njk5/MzYwLXN0b2NrLWls/bHVzdHJhdGlvbi1i/bGFjay1mcmlkYXkt/YXBwLXNhbGUtZGlz/Y291bnQuanBn"
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
