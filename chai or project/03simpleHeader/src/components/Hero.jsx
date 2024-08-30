import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <main className='hero'>
        <div className="hero-content">
            <h1>YOUR FEETDESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reores a amet deleniti praesentium quaerat possimus qui.</p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='sec-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Available On</p>

            </div>

            <div className="brand-icon">

            </div>
        </div>
        <div className="hero-img">
            <img src="/images/hero-img.jpg" alt="hero img" />
        </div>
      </main>
    </div>
  )
}

export default Hero
