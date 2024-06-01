import Image from 'next/image'
import React from 'react'
import Banner from '../../public/assets/images/banner.png'
import About from '../../public/assets/images/about.png'
import webDevlopment from '../../public/assets/images/web.png'
import appDevlopment from '../../public/assets/images/app.png'
import IOTDevelopment from '../../public/assets/images/iot.png'
import BlockchainDevelopment from '../../public/assets/images/blockchain.png'
import Link from 'next/link'

const Home = () => {
  const serviceList = [
    {serviceImg:webDevlopment , serviceTitle:'Web Development'},
    {serviceImg:appDevlopment , serviceTitle:'App Development'},
    {serviceImg:IOTDevelopment , serviceTitle:'IOT Development'},
    {serviceImg:BlockchainDevelopment , serviceTitle:'Blockchain Development'},
  ]

  const productList = [
    {productImg:webDevlopment , productTitle:'Product 1'},
    {productImg:appDevlopment , productTitle:'Product 2'},
    {productImg:IOTDevelopment , productTitle:'Product 3'},
    {productImg:BlockchainDevelopment , productTitle:'Product 4'},
    {productImg: BlockchainDevelopment, productTitle:'Product 5'},
    {productImg: IOTDevelopment, productTitle:'Product 6'},
    {productImg:appDevlopment , productTitle:'Product 7'},
    {productImg:webDevlopment , productTitle:'Product 8'},
  ]
  return (
    <>
      {/* Hero Section */}
      <div className='hero-section' id="home">
        <div className='hero-image-box'>
          <Image src={Banner} alt="Banner"/>
        </div>
        <div className='container'>
          <div className='hero-detail-box'>
            <h1>We Solve For The Better Good</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='about-section section-padding padding-bottom-0' id="about">
        <div className='container'>
          <div className='row align-center'>
            <div className='col-md-6'>
              <div className='about-image-box'>
                <Image src={About} alt="About" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='about-content-box'>
                <h2 className='sub-title'>About US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='services-section section-padding padding-bottom-0' id="service">
        <div className='container'>
          <h2 className='sub-title'>Services</h2>
            <div className='services-area'>
              <ul className='product-listing'>
                {
                  serviceList.map((service,key)=> {
                    return(
                      <li className='' key="key">
                        <div className='product-box'>
                          <div className='image-box'>
                            <Image src={service.serviceImg} alt={service.serviceTitle} />
                          </div>
                          <div className='product-detail'>
                            <h4>{service.serviceTitle}</h4>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
      </div>

      {/* Producst Section */}
      <div className='products-section section-padding padding-bottom-0' id="product">
        <div className='container'>
          <h2 className='sub-title'>Products</h2>
          <div className='products-area'>
             <ul className='product-listing'>
              {
                productList.map((product,key)=> {
                  return(
                    <li className='' key="key">
                      <div className='product-box'>
                        <div className='image-box'>
                          <Image src={product.productImg} alt={product.productTitle} />
                        </div>
                        <div className='product-detail'>
                          <h4>{product.productTitle}</h4>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
             </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='cta-section section-padding' id="contact">
        <div className='container'>
          <div className='cta-box'>
            <div className='cta-content-box'>
              <h2 className='sub-title'>If you have projects in mind then reach out to us</h2>
              <Link className="contact-btn" href="mailto:techxpertsinfo@gmail.com">Contact US</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
