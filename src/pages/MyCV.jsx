import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyCV.css';  // Importer le fichier CSS pour le style de la carte

const MyCV = () => {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('URL_TO_YOUR_API'); // Remplace par l'URL de ton API
        setCvData(response.data); // Assurez-vous que 'response.data' a la structure correcte
      } catch (error) {
        console.error('Erreur de récupération des données:', error);
      }
    };
    fetchData();
  }, []);

  if (!cvData) {
    return <div>Chargement...</div>; // Affiche un message de chargement si les données sont encore à récupérer
  }

  // Assurez-vous que 'cvData.experiences' est un tableau avant de faire un map
  const experiences = Array.isArray(cvData.experiences) ? cvData.experiences : [];

  return (
    <div className="my-cv-card">
      <h2>{cvData.firstname} {cvData.lastname}</h2>
      <p>{cvData.description}</p>
      <div className="experiences">
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div key={index} className="experience">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.startDate} - {experience.endDate}</p>
              <p>{experience.description}</p>
            </div>
          ))
        ) : (
          <p>Aucune expérience disponible.</p>
        )}
      </div>
    </div>
  );
};

export default MyCV;

