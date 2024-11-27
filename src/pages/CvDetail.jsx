import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback} from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { getCvByID } from '../api/cv';

const CvDetail = () => {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID
  const {token } = useContext(AuthContext);
  const [cvInfo, setCvInfo] = useState();
  const [error, setError] = useState();


    const getCvList = useCallback( async () => {
      try {
          const res =  await getCvByID(id, token);
          console.log(res)
          setCvInfo(res.data.cv)
      } catch (error) {
          setError(error.message)
      }
    }, [id, token]);

  useEffect(() => {
    if(token){
      getCvList()
    }
  }, [id, token]);

  if (error) {
    return <div className="text-red-500 text-center mt-6">Error: {error}</div>;
  }

  if (!cvInfo) {
    return <div className="text-center mt-6">Cv en attente</div>;
  }

  return (
      <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800">{cvInfo.title}</h1>
        <p className="text-gray-600 mt-2">{cvInfo.description}</p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h2>
          <p className="mt-1 text-gray-600">
            <strong>Name:</strong> {cvInfo.firstname} {cvInfo.lastname}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {cvInfo.email}
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Educational Background
          </h2>
          {cvInfo.experienceScolaire.map((edu, index) => (
            <div key={index} className="mt-4">
              <p className="text-gray-800 font-medium">{edu.type}</p>
              <p className="text-gray-600">
                {edu.lieuFormation} ({new Date(edu.dateDebut).getFullYear()} -{" "}
                {new Date(edu.dateFin).getFullYear()})
              </p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Professional Experience
          </h2>
          {cvInfo.experienceProfessionnel.map((job, index) => (
            <div key={index} className="mt-4">
              <p className="text-gray-800 font-medium">
                {job.poste} at {job.entreprise}
              </p>
              <p className="text-gray-600">
                ({new Date(job.dateDebut).toLocaleDateString()} -{" "}
                {new Date(job.dateFin).toLocaleDateString()})
              </p>
              {job.missions.map((mission, i) => (
                <div key={i} className="mt-2">
                  <p className="text-gray-800 font-medium">{mission.titre}</p>
                  <p className="text-gray-600">{mission.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default CvDetail;
