import React from 'react'

const IconButton = ({title, svg, onClick}) => {
  return (
    <button onClick={onClick} type="button" className=" gap-x-2.5 gap-y-2.5 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {svg && <img src={svg} alt={title} className="w-5 h-5" />} 
    {title && title}
    </button>
  )
}

export default IconButton
