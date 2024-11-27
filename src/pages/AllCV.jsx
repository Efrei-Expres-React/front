import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getCVs } from '../api/cv';
import CVlist from '../components/layout/CVlist';
import { AuthContext } from '../utils/context/AuthContext';
import { useContext, useCallback, useEffect, useRef } from 'react';

const AllCV = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cvs, setCvs] = useState();
  const isMounted = useRef(false)



  const getCvList = useCallback( async () => {
    try {
        const res =  await getCVs();
        setCvs(res.data.cvs)
    } catch (error) {
        setError(error.message)
    }
  }, []);

  useEffect(() => {
    if(!isMounted.current) {
      getCvList()
      isMounted.current = false
    }
  }, [isMounted]);



  // // Filtrage basé sur la barre de recherche
  // const filteredCVs = cvs.filter((cv) =>
  //   `${cv.firstName} ${cv.lastName} ${cv.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-700">Welcome to CV Dashboard</h2>
        <div className="mb-6 text-lg text-center text-gray-600">
          <p className="mt-4">Here you are set to explore all CVs</p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a CV..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <CVlist cvs={cvs} showButtons={false}/>
      </div>
    </div>
  );
};

export default AllCV;
