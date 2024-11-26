import React, { useRef } from 'react'
import { useState, useCallback, useEffect } from 'react';
import { getMyCV, deleteCV as deleteOneCV} from '../api/cv';
import UseDate from '../utils/hooks/UseDate';
import IconButton from '../components/atoms/IconButton';
import eye from '../assets/svg/eye.svg';
import edit from '../assets/svg/edit.svg';
import trash from '../assets/svg/trash.svg';
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import Alerts from '../components/atoms/Alerts';

const MyCvs = () => {
const [cvs, setCvs] = useState();
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

  useEffect(() => {
    if(!isMounted.current && token) {
        getProfile()
        isMounted.current = false
    }
  }, [isMounted, token]);

  const deleteCV = async (id) =>{
    try {
      await deleteOneCV(id, token)
      await getProfile(token)
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <>
            <h1>Mes CV</h1>
            {error && <Alerts message={error} type='error'/> }
    <div className="flex justify-center flex-wrap gap-x-2.5 gap-y-2.5 my-8">
{
        cvs?.map((cv)=>(
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cv.title}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{cv.userId.firstname} {cv.userId.lastname}</p>
            <IconButton svg={eye} />
            <IconButton svg={edit} />
            <IconButton svg={trash} onClick={()=>deleteCV(cv._id)}/>
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Crée le  <UseDate dateString={cv.createdAt} />
</p>
            </div>
        ))
      }
    </div>
    </>
  )
}

export default MyCvs
