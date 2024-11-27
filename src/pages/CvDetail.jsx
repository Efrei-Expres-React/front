import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback} from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { getCvByID } from '../api/cv';
import Cv from '../components/layout/CvDetails';
import Recommandations from '../components/layout/Recommandations';

const CvDetail = () => {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID
  const {token } = useContext(AuthContext);
  const [cvInfo, setCvInfo] = useState();
  const [error, setError] = useState();


    const getCvList = useCallback( async () => {
      try {
          const res =  await getCvByID(id, token);
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
    <>
    <Cv cvInfo={cvInfo}/>
    <Recommandations cvId={id}/>
    </>

  );
};

export default CvDetail;
