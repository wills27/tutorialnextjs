import React, { PropsWithChildren } from 'react'

const CustomizationStep: React.FC<PropsWithChildren<{ title:string }>> = ({ children, title}) => {
  return (
    <div className='mb-10'>
      <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">{title}</h1>
      {children}
    </div>
  );
};

export default CustomizationStep;