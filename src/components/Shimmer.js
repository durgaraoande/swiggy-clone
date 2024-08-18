import React from 'react';
//import './Shimmer.css'; // Make sure to import the CSS file

const Shimmer = () => {
  return (
    <div className='flex justify-between flex-wrap mx-24'>
      {Array(12).fill("").map((_, index) => (
        <div key={index} className="p-3 m-2 w-64 bg-gray-100 rounded-lg shadow-md">
          <div className="w-full h-40 object-cover rounded-t-lg"></div>
          <div className="text-xl font-semibold text-gray-800 p-4"></div>
          <div className="text-sm text-gray-600 p-4"></div>
          <div className="text-sm text-gray-600 p-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
