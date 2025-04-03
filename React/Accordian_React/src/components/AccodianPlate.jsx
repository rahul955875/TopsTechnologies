import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const AccodianPlate = ({title, text}) => {
    const [isOpen, setIsOpen]= useState(true)
  return (
    <div className='accordian-plate shadow-sm border border-dark-subtle border-1' onClick={()=>setIsOpen(prev => !prev)}>
        <div className="accordina-head bg-primary-subtle d-flex align-items-center px-2 justify-content-between">
            <h4 className='p-2'>{title}</h4>
            {isOpen ? <h5><FontAwesomeIcon icon={faAngleDown} /></h5> : <h5><FontAwesomeIcon icon={faAngleRight} /></h5>}
        </div>
        <div className={`accordian-body ${isOpen ? '' : 'd-none' }`}>
            <p className='m-0 p-3'>{text}</p>
        </div>
    </div>
  )
}

export default AccodianPlate