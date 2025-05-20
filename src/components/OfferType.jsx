import React from 'react';
import { ShoppingBasket } from 'lucide-react';

const OfferType = ({type}) => {
  return (
    <div className="flex items-center justify-between bg-white  mb-3  mx-auto">
      <div className="flex items-center gap-2">
        <ShoppingBasket className="text-teal-600" size={24} />
        <span className="text-lg font-bold uppercase">{type}</span>
      </div>
      <button className="text-teal-600  border-teal-600  hover:underline transition text-lg font-bold">
        See More &gt;&gt;
      </button>
    </div>
  );
};

export default OfferType;
