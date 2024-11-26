import React from 'react';
import { useNavigate } from 'react-router-dom';
import CVForm from '../components/layout/cvForm';
import { createCV } from '../api/cv';

const CreateCV = () => {
  const [error, setError] = React.useState('');
  const [experiences, setExperiences] = React.useState([{ title: '', company: '', startDate: '', endDate: '' }]);
  const navigate = useNavigate();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    setError('');

    try {
      const res = await createCV(formData.firstname, formData.lastname, formData.description, experiences);
      if (res?.data?.cv) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-12 bg-white rounded-lg shadow-lg">
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-700">Create CV</h2>
        <CVForm
          onSubmit={handleSubmit}
          error={error}
          experiences={experiences}
          setExperiences={setExperiences}
        />
      </div>
    </div>
  );
};

export default CreateCV;
