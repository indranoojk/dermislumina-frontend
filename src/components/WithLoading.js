import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

const WithLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // adjust the timeout to your liking
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : children}
    </>
  );
};

export default WithLoading;