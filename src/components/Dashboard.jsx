import React from 'react'
import Header from './Header'
import Navbar from './Navbar/Navbar'
import CategorySlider from './CategorySlider'
import HeroSection from './Hero Section/HeroSection'
import FeatureOffer from './Feature Offer/FeatureOffer'
import FeaturebrandSlider from './Feature Brand/FeaturebrandSlider'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CategorySlider/>
      <HeroSection/>
      <FeatureOffer/>
      <FeaturebrandSlider/>
    </div>
  )
}

export default Dashboard
