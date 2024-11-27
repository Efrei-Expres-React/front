import React, { useRef } from 'react'
import { useState, useCallback, useEffect } from 'react';
import { getMyCV, deleteCV as deleteOneCV} from '../api/cv';
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import CVlist from '../components/layout/CVlist';
import RecoAccordion from '../components/layout/RecoAccordion';
import { deleteRecommandation, getMyrecomandations } from '../api/recomandations';
import Alerts from '../components/atoms/Alerts';


const MyCvs = () => {
const [cvs, setCvs] = useState();
const [recommandations, setRecommandations] = useState();
const isMounted = useRef(false)
const {token } = useContext(AuthContext);
const [error, setError] = useState();


const getProfile = useCallback( async () => {
    try {
        const res =  await getMyCV(token);
        setCvs(res.data.cv)
    } catch (error) {
        setError(error.message)
    }
  }, [token]);

  const getRecommandations = useCallback( async () => {
    try {
        const res =  await getMyrecomandations(token);
        setRecommandations(res.data.message)
    } catch (error) {
        setError(error.message)
    }
  }, [token]);

  useEffect(() => {
    if(!isMounted.current && token) {
        getProfile()
        getRecommandations()
        isMounted.current = false
    }
  }, [isMounted, token]);

  const deleteCV = async (id) =>{
    try {
      await deleteOneCV(id, token)
      await getProfile(token)
      await getRecommandations()
    } catch (error) {
      setError(error.message)
    }
  }

  const deleteRecommandations = async (id) =>{
    try {
      await deleteRecommandation(id, token)
      await getRecommandations()
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <>
     {error && <Alerts message={error} type='error'/> }

      <CVlist showButtons={true} cvs={cvs} deleteCV={deleteCV} title={"Mes CV"}/>

      <RecoAccordion recoList={recommandations} onDelete={deleteRecommandations}/>
    </>
  )
}

export default MyCvs
