import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const CvDetail = () => {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">CV Details</h2>
        <p className="mt-4 text-gray-600">You are viewing details for CV ID: {id}</p>
      </div>
    </div>
  );
};

export default CvDetail;
