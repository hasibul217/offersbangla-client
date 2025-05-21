import React, { useState } from 'react';
import { tabsData, tabContent } from './brandTabData';

const BrandDetailTab = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id); // default first tab

  return (
    <div className=" mx-auto rounded shadow-lg mt-4">
      <div 
        className="flex space-x-4  border-gray-700 bg-gray-100 rounded "
        role="tablist"
        aria-label="Brand detail tabs"
      >
        {tabsData.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`tabpanel-${id}`}
            id={`tab-${id}`}
            tabIndex={activeTab === id ? 0 : -1}
            className={`px-5 py-3 font-semibold text-sm sm:text-base rounded 
              ${
                activeTab === id
                  ? 'bg-teal-600 text-white shadow'
                  : 'bg-transparent text-gray-600 hover:text-teal-600'
              }
              
            `}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="p-8  rounded-b min-h-[300px]"
      >
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default BrandDetailTab;
