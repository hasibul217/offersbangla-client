import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import OfferCoverImage from './OfferCoverImage'
import OfferDescription from './OfferDescription'
import OfferQR from './OfferQR'
import ShareOffer from './ShareOffer'
import RelatedOffer from './RelatedOffer'


const offerData = {
  title: "Exclusive Natural Skincare Offer",
  description: `Experience the rejuvenating power of nature with our limited-time offer on premium natural skincare products. 
  Our collection features ingredients sourced directly from nature, free from harsh chemicals and artificial additives. 
  Enjoy deep hydration, skin-brightening effects, and anti-aging benefits all in one bundle. Whether you're looking to refresh your daily routine 
  or gift someone special, this offer delivers luxury and care at an unbeatable price. Don't miss out on transforming your skincare ritual 
  with our bestsellers and exclusive new arrivals!`,
  coverImage: "https://img.freepik.com/free-vector/natural-cosmetics-skin-care-lotion-banner_33099-1957.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  cardImage: "https://img.freepik.com/premium-photo/black-silver-camera-table-with-reflection-black-friday-sale-sign_1234631-718.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  startTime: "2022-01-01 00:00:00",
  endTime: "2022-01-15 23:59:59"
};


const OfferDetails = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='container mx-auto py-2'>
        <OfferCoverImage offer={offerData}/>
       
        
        <OfferDescription offer={offerData}/>

        <RelatedOffer/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default OfferDetails
