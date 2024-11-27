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
    const newExperience = 
      type === 'educational'
        ? { type: '', lieuFormation: '', dateDebut: '', dateFin: '', description: '' }
        : { poste: '', entreprise: '', dateDebut: '', dateFin: '', missions: [] };

    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleMissionChange = (expIndex, missionIndex, event) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].missions[missionIndex][event.target.name] = event.target.value;
    setExperiences(newExperiences);
  };

  const addMission = (expIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].missions = newExperiences[expIndex].missions || [];
    newExperiences[expIndex].missions.push({ titre: '', description: '' });
    setExperiences(newExperiences);
  };

  const removeMission = (expIndex, missionIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].missions = newExperiences[expIndex].missions.filter((_, i) => i !== missionIndex);
    setExperiences(newExperiences);
  };

  return (
    <div className="mt-10">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">
        {type === 'educational' ? 'Expériences Scolaires' : 'Expériences Professionnelles'}
      </h3>
      {experiences.map((experience, index) => (
        <div key={index} className="p-6 mt-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-2 gap-6">
            {type === 'educational' ? (
              <>
                <Input
                  id={`${type}-type-${index}`}
                  name="type"
                  type="text"
                  value={experience.type}
                  onChange={(e) => handleExperienceChange(index, e)}
                  placeholder="Type de diplôme"
                  title="Type"
                  required
                />
                <Input
                  id={`${type}-lieuFormation-${index}`}
                  name="lieuFormation"
                  type="text"
                  value={experience.lieuFormation}
                  onChange={(e) => handleExperienceChange(index, e)}
                  placeholder="Lieu de formation"
                  title="Lieu"
                  required
                />
              </>
            ) : (
              <>
                <Input
                  id={`${type}-poste-${index}`}
                  name="poste"
                  type="text"
                  value={experience.poste}
                  onChange={(e) => handleExperienceChange(index, e)}
                  placeholder="Poste occupé"
                  title="Poste"
                  required
                />
                <Input
                  id={`${type}-entreprise-${index}`}
                  name="entreprise"
                  type="text"
                  value={experience.entreprise}
                  onChange={(e) => handleExperienceChange(index, e)}
                  placeholder="Entreprise"
                  title="Entreprise"
                  required
                />
              </>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <Input
              id={`${type}-dateDebut-${index}`}
              name="dateDebut"
              type="date"
              value={experience.dateDebut}
              onChange={(e) => handleExperienceChange(index, e)}
              title="Date de début"
              required
            />
            <Input
              id={`${type}-dateFin-${index}`}
              name="dateFin"
              type="date"
              value={experience.dateFin}
              onChange={(e) => handleExperienceChange(index, e)}
              title="Date de fin"
              required
            />
          </div>

          {type === 'professional' && (
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-600">Missions</h4>
              {experience.missions?.map((mission, missionIndex) => (
                <div key={missionIndex} className="grid grid-cols-2 gap-6 mb-4">
                  <Input
                    id={`mission-titre-${index}-${missionIndex}`}
                    name="titre"
                    type="text"
                    value={mission.titre}
                    onChange={(e) => handleMissionChange(index, missionIndex, e)}
                    placeholder="Titre de la mission"
                    title="Titre"
                    required
                  />
                  <Input
                    id={`mission-description-${index}-${missionIndex}`}
                    name="description"
                    type="text"
                    value={mission.description}
                    onChange={(e) => handleMissionChange(index, missionIndex, e)}
                    placeholder="Description de la mission"
                    title="Description"
                    required
                  />
                  {missionIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => removeMission(index, missionIndex)}
                      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Supprimer Mission
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addMission(index)}
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Ajouter une Mission
              </button>
            </div>
          )}

          {index > 0 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Supprimer Expérience
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="px-6 py-2 mt-6 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Ajouter une Expérience
      </button>
    </div>
  );
};

const CVForm = ({ onSubmit, error }) => {
  const { formData, handleInputChange } = useForm({
    title: '',
    description: '',
    visibility: false,
  });

  const [experienceScolaire, setExperienceScolaire] = useState([]);
  const [experienceProfessionnel, setExperienceProfessionnel] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      experienceScolaire,
      experienceProfessionnel,
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alerts message={error} type="error" />}
      <div className="grid grid-cols-1 gap-6">
        <Input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Titre du CV"
          title="Titre"
          required
        />
        <Input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description du CV"
          title="Description"
          required
        />
        <div className="flex items-center">
          <input
            id="visibility"
            name="visibility"
            type="checkbox"
            checked={formData.visibility}
            onChange={(e) => handleInputChange({ target: { name: 'visibility', value: e.target.checked } })}
          />
          <label htmlFor="visibility" className="ml-2 text-sm text-gray-600">
            Visibilité
          </label>
        </div>

      </div>

      {/* Expériences Scolaires */}
      <ExperienceForm
        experiences={experienceScolaire}
        setExperiences={setExperienceScolaire}
        type="educational"
      />

      {/* Expériences Professionnelles */}
      <ExperienceForm
        experiences={experienceProfessionnel}
        setExperiences={setExperienceProfessionnel}
        type="professional"
      />

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
