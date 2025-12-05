import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeGridSlider from '../../components/HomeGridSlider'
import '../Home/Home.css'
import ProductsSlider from '../../components/ProductsSlider'
import HomeSlider2 from '../../components/HomeSlider2'
import ProductsSlider2 from '../../components/ProductsSlider2'
import ProductsSlider3 from '../../components/ProductsSlider3'
import HomeSlider3 from '../../components/HomeSlider3'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
      <div style={{ outline: "none", userSelect: "none" }}>
        <HomeSlider />
      </div>

      <section style={{ outline: "none", userSelect: "none" }}>
        <div>
          <HomeGridSlider items={3} />
        </div>
      </section>

      {/*Best Sellers products section */}
      {/*using css of best seller for font */}
      <section className="py-8 " style={{ outline: "none", userSelect: "none" }}>
        <div className='container'>
          <div className='leftSec text-center '>
            <h2 className='best_seller_font text-[40px] font-[600]'style={{ outline: "none", userSelect: "none" }}>Best Sellers</h2>
            <p className='best_seller_font text-[14px] font-[400]'style={{ outline: "none", userSelect: "none" }}> Don't miss the current offer — available for a limited time only.</p>
          </div>
        </div>
      </section>
      <ProductsSlider items={5} />

      {/*HomeSlider2 Section */}
      <HomeSlider2 />

      {/*Most popular Most Popular Aluminum Framed Mirrors */}
      {/*using css of best seller for font */}
      <section className="py-8 mt-10" >
        <div className='container' style={{ outline: "none", userSelect: "none" }}>
          <div className='leftSec text-center'>
            <h2 className='best_seller_font text-[40px] font-[600]'style={{ outline: "none", userSelect: "none" }}>Most Popular Aluminum Framed Mirrors</h2>
            <p className='best_seller_font text-[14px] font-[400]'style={{ outline: "none", userSelect: "none" }}>Discover our most popular aluminum framed mirrors—modern, elegant, and timeless.</p>
          </div>
        </div>
      </section>
      <div style={{ outline: "none", userSelect: "none" }}>
      <ProductsSlider items={5} />
      </div>


      { /*Monsoon Sale*/}
      {/*using css of best seller for font */}
      <section className="py-8 mt-10" style={{ outline: "none", userSelect: "none" }}>
        <div className='container' style={{ outline: "none", userSelect: "none" }}>
          <div className='leftSec text-center'>
            <h2
              className='best_seller_font text-[40px] font-[600]'
              style={{ outline: "none", userSelect: "none" }}
            >
              Monsoon sale &#x2728;
            </h2>
          </div>
        </div>
      </section>
   <ProductsSlider items={5} />

      {/*HomeSlider3 Section */}
      <HomeSlider3 />

      {/*Testimonials*/}
      <section className='mt-10 ' style={{ outline: "none", userSelect: "none" }}>
        <div className='container'>
          <Testimonials items={3} />
        </div>
      </section>


      
    </>





  )
}

export default Home

