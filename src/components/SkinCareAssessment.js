import React, { useState } from 'react';

function SkinCareAssessment() {
  const [ageRange, setAgeRange] = useState(null);
  const [skinType, setSkinType] = useState(null);
  const [skinConcern, setSkinConcern] = useState(null);

  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };

  const handleSkinTypeChange = (event) => {
    setSkinType(event.target.value);
  };

  const handleSkinConcernChange = (event) => {
    setSkinConcern(event.target.value);
  };

  const getSkinCareRecommendations = () => {

    // Example:
    if (ageRange === '13-18' && skinType === 'Oily' && skinConcern === 'Acne') {
      return 'Recommended products: Oil-free cleanser, salicylic acid treatment, lightweight moisturizer.';
    } else {
      return 'No recommendations available yet.';
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Skin Care Assessment</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="age-range" className="block text-gray-700 font-bold mb-2">
            How young you are?
          </label>
          <select
            id="age-range"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleAgeRangeChange}
          >
            <option value={null}>Select Age Range</option>
            <option value="below 13">Below 13</option>
            <option value="13-18">13 - 18</option>
            <option value="18-25">18 - 25</option>
            <option value="25-40">25 - 40</option>
            <option value="above 40">Above 40</option>
          </select>
        </div>

        <div>
          <label htmlFor="skin-type" className="block text-gray-700 font-bold mb-2">
            Skin Type:
          </label>
          <select
            id="skin-type"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleSkinTypeChange}
          >
            <option value={null}>Select Skin Type</option>
            <option value="Dry">Dry</option>
            <option value="Normal">Normal</option>
            <option value="Oily">Oily</option>
            <option value="Combination">Combination</option>
            <option value="Sensitive">Sensitive</option>
          </select>
        </div>

        <div>
          <label htmlFor="skin-concern" className="block text-gray-700 font-bold mb-2">
            Skin Concern:
          </label>
          <select
            id="skin-concern"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleSkinConcernChange}
          >
            <option value={null}>Select Skin Concern</option>
            <option value="Acne">Acne</option>
            <option value="Dryness">Dryness</option>
            <option value="Sensitivity">Sensitivity</option>
            <option value="Hyperpigmentation">Hyperpigmentation</option>
            <option value="Wrinkles">Wrinkles</option>
          </select>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={getSkinCareRecommendations}
      >
        Get Recommendations
      </button>

      {/* Display recommendations */}
      {ageRange && skinType && skinConcern && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Recommended Skin Care:</h2>
          <p>{getSkinCareRecommendations()}</p>
        </div>
      )}
    </div>
  );
}

export default SkinCareAssessment;
