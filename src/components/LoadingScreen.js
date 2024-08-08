import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      className="fixed p-4 lg:p-0 top-0 left-0 w-full h-full bg-black bg-opacity-95 flex justify-center items-center"
      style={{ zIndex: 1000 }}
    >
      <div className="text-white text-3xl font-bold font-serif">Generating your Skincare recommendations...</div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;