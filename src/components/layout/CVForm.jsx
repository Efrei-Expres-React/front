import React from 'react';
import { useForm } from '../../utils/hooks/useForm';
import Input from '../atoms/Input';
import Alerts from '../atoms/Alerts';

const CVForm = ({ onSubmit, error, experiences, setExperiences }) => {
  const { formData, handleInputChange } = useForm({
    firstname: '',
    lastname: '',
    description: '',
  });

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
    <form onSubmit={(e) => onSubmit(e, formData)}>
      {error && <Alerts message={error} type="error" />}

      {/* Section Expériences pédagogiques */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">Expériences pédagogiques</h3>
        {experiences.map((experience, index) => (
          <div key={index} className="p-6 mt-4 border rounded-lg bg-gray-50">
            <div className="grid grid-cols-2 gap-6">
              <Input
                id={`diplome-${index}`}
                name="diplome"
                type="text"
                value={experience.diplome}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Entrez le nom du diplôme"
                title="Diplôme"
                required
              />
              <Input
                id={`certification-${index}`}
                name="certification"
                type="text"
                value={experience.certification}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Certification"
                title="Certification"
                required
              />
              <Input
                id={`formation-${index}`}
                name="formation"
                type="text"
                value={experience.formation}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Formation"
                title="Formation"
                required
              />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <Input
                id={`startDate-${index}`}
                name="startDate"
                type="date"
                value={experience.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
                title="Début"
                required
              />
              <Input
                id={`endDate-${index}`}
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
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addExperience}
          className="px-6 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add More
        </button>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">Expériences professionnelles</h3>
        {experiences.map((experience, index) => (
          <div key={index} className="p-6 mt-4 border rounded-lg bg-gray-50">
            <div className="grid grid-cols-2 gap-6">
              <Input
                id={`title-${index}`}
                name="title"
                type="text"
                value={experience.title}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Nom du poste"
                title="Poste occupé"
                required
              />
              <Input
                id={`company-${index}`}
                name="company"
                type="text"
                value={experience.company}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Nom de l'entreprise"
                title="Entreprise"
                required
              />
              <Input
                id={`mission-${index}`}
                name="mission"
                type="text"
                value={experience.mission}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Missions"
                title="Missions"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <Input
                id={`startDate-${index}`}
                name="startDate"
                type="date"
                value={experience.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
                title="Début"
                required
              />
              <Input
                id={`endDate-${index}`}
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
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addExperience}
          className="px-6 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add More
        </button>
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full p-4 mt-8 text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Create
      </button>
    </form>
  );
};

export default CVForm;
