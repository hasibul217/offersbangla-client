import React from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureOfferSlider from './FeatureOfferSlider';

const FeatureOffer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <FeatureHeader />
      </div>
      <FeatureOfferSlider />
    </div>
  );
};

export default FeatureOffer;
