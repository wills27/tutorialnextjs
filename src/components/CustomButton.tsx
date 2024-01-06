import React from 'react'

interface CustomButtonProps {
  /* your props definition here */
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return (
        <div>
           <button 
                className='rounded bg-amber-300 text-black py-2 px-4 shadow outline-none hover:bg-amber-400 active:bg-amber-500'
                >
                    Next Step
                </button>
        </div>
     )
}

export default CustomButton;