import React from 'react'
import Header from './Header'
import Navbar from './Navbar/Navbar'
import CategorySlider from './CategorySlider'
import HeroSection from './Hero Section/HeroSection'
import FeatureOffer from './Feature Offer/FeatureOffer'
import FeaturebrandSlider from './Feature Brand/FeaturebrandSlider'
import FurnitureOffer from './Feature Offer/FurnitureOffers'
import ClothingOffer from './Feature Offer/ClothingOffers'
import ElectronicsOffer from './Feature Offer/ElectronicsOffer'
import FAQ from './FAQ'
import Newsletter from './NewsLetter'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CategorySlider/>
      <HeroSection/>
      <FeatureOffer/>
      <FurnitureOffer/>
      <ClothingOffer/>
      <ElectronicsOffer/>
      <FeaturebrandSlider/>
      <FAQ/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Dashboard
