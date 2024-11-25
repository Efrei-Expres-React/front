import React from 'react';

const Alerts = ({ type = 'error', message = 'Problème!' }) => {
  const alertClasses = {
    error: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
    success: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
    warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400',
  };

  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg ${alertClasses[type] || alertClasses.error}`}
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alerts;
