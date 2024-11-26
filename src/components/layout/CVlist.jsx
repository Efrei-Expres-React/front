import React from 'react'
import eye from '../../assets/svg/eye.svg';
import edit from '../../assets/svg/edit.svg';


import UseDate from '../../utils/hooks/UseDate';
import IconButton from '../atoms/IconButton';
import trash from '../../assets/svg/trash.svg';


const CVlist = ({ title, showButtons, deleteCV, cvs }) => {
  return (
    <>
    {title &&  <h1 className="text-center my-4 text-3xl font-bold text-gray-900 dark:text-white"> Mes CV </h1>}

        <div className="flex justify-center flex-wrap gap-x-2.5 gap-y-2.5 my-8">
        {
        cvs?.map((cv, index)=>(

        <div key={index} className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center text-center gap-y-2.5 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cv.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cv.userId.firstname} {cv.userId.lastname}</p>
        
        
        {showButtons && 
            <div className="flex justify-center  gap-x-2.5 gap-y-2.5">
                <IconButton svg={eye} />
                <IconButton svg={edit} />
                <IconButton svg={trash} onClick={()=>deleteCV(cv._id)}/>
            </div>
        }

        <p className="mb-1 font-normal text-gray-400 dark:text-gray-400"> Crée le  <UseDate dateString={cv.createdAt} />
        </p>
        </div>
        ))
        }
        </div>
        </>
  )
}

export default CVlist
