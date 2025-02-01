import React from 'react'

const InputBtn = ({type,placeholder,reff}) => {
  return (
<>
   <input type={`${type}`} placeholder={`${placeholder}`} ref={reff} required  className='px-4 py-6 text-sm  max-lg:py-5  rounded-md bg-neutral-100' />
    </>
  )
}

export default InputBtn