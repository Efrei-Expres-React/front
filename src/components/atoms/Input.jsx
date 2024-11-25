import React from 'react';

const Input = ({ id, name, type, value, onChange, placeholder, required = false, title, rows = 1 }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600 mb-2">{title}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          required={required}
          rows={rows} 
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default Input;
