import React, { useState } from 'react';
import { useForm } from '../../utils/hooks/useForm';
import Input from '../atoms/Input';
import Alerts from '../atoms/Alerts';

const ExperienceForm = ({ experiences, setExperiences, type }) => {
  const handleExperienceChange = (index, event) => {
    const newExperiences = [...experiences];
    newExperiences[index][event.target.name] = event.target.value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { title: '', company: '', startDate: '', endDate: '' }]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  return (
    <div className="mt-10">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">
        {type === 'educational' ? 'Expériences pédagogiques' : 'Expériences professionnelles'}
      </h3>
      {experiences.map((experience, index) => (
        <div key={index} className="p-6 mt-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-2 gap-6">
            <Input
              id={`${type}-title-${index}`}
              name="title"
              type="text"
              value={experience.title}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder={type === 'educational' ? 'Diplôme ou formation' : 'Nom du poste'}
              title={type === 'educational' ? 'Diplôme/Formation' : 'Poste occupé'}
              required
            />
            <Input
              id={`${type}-company-${index}`}
              name="company"
              type="text"
              value={experience.company}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder={type === 'educational' ? 'Institution' : 'Entreprise'}
              title={type === 'educational' ? 'Institution' : 'Entreprise'}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <Input
              id={`${type}-startDate-${index}`}
              name="startDate"
              type="date"
              value={experience.startDate}
              onChange={(e) => handleExperienceChange(index, e)}
              title="Début"
              required
            />
            <Input
              id={`${type}-endDate-${index}`}
              name="endDate"
              type="date"
              value={experience.endDate}
              onChange={(e) => handleExperienceChange(index, e)}
              title="Fin"
              required
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="px-6 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Ajouter une expérience
      </button>
    </div>
  );
};

const CVForm = ({ onSubmit, error }) => {
  const { formData, handleInputChange } = useForm({
    firstname: '',
    lastname: '',
    description: '',
  });

  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [professionalExperiences, setProfessionalExperiences] = useState([]);

  const validateForm = () => {
    const allExperiences = [...educationalExperiences, ...professionalExperiences];
    for (const exp of allExperiences) {
      if (!exp.startDate || !exp.endDate || new Date(exp.startDate) > new Date(exp.endDate)) {
        return false;
      }
    }
    return true;
  };

  // Fonction qui gère la soumission des données au backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification de la validité des dates
    if (!validateForm()) {
      alert('Veuillez vérifier les dates dans vos expériences.');
      return;
    }

    try {
      console.log('Form data:', formData);
      const res = await createCV(formData.firstname, formData.lastname, formData.description, educationalExperiences, professionalExperiences);
      console.log('API Response:', res);
      if (res?.data?.cv) {
        // Redirection vers le dashboard après succès
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Une erreur est survenue lors de la soumission du CV.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alerts message={error} type="error" />}

      <div className="grid grid-cols-2 gap-6">

      </div>

      

      {/* Expériences pédagogiques */}
      <ExperienceForm
        experiences={educationalExperiences}
        setExperiences={setEducationalExperiences}
        type="educational"
      />

      {/* Expériences professionnelles */}
      <ExperienceForm
        experiences={professionalExperiences}
        setExperiences={setProfessionalExperiences}
        type="professional"
      />

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full p-4 mt-8 text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Soumettre
      </button>
    </form>
  );
};

export default CVForm;
