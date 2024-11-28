import React from 'react';

const UseDate = ({ dateString }) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("fr-FR", {
    weekday: "long", 
    year: "numeric",
    month: "long", 
    day: "numeric",  
  });

  const formattedTime = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `${formattedDate} à ${formattedTime}`

};

export default UseDate;
