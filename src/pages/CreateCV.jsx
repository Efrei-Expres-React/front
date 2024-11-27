import React from 'react';
import { useNavigate } from 'react-router-dom';
import CVForm from '../components/layout/cvForm';
import { createCV } from '../api/cv';

const CreateCV = () => {
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setError('');

    try {
      console.log('Form data:', formData); // Debugging form data
      const payload = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        title: formData.title,
        description: formData.description,
        visibility: formData.visibility,
        experienceScolaire: formData.educationalExperiences,
        experienceProfessionnel: formData.professionalExperiences,
      };

      console.log('Payload:', payload); // Debugging the payload

      const res = await createCV(payload);

      console.log('API Response:', res); // Debugging API response

      if (res?.data?.cv) {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error:', err); // Debugging errors
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-12 bg-white rounded-lg shadow-lg">
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-700">Create CV</h2>
        <CVForm onSubmit={handleSubmit} error={error} />
      </div>
    </div>
  );
};

export default CreateCV;
