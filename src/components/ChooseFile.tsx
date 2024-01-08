import React from 'react'
import CustomButton from './CustomButton';

const ChooseFile: React.FC = () => {
    return (
        <div className='mb-6'>
            <p className='text-[12px] font-medium font-montserrat  text-color-6 text-left'>
                Option 1
            </p>
            <div className='rounded-[4.95px] bg-whitesmoke-300 w-full h-14 flex items-center'>
                <CustomButton className='  bg-color-1  text-white text-left ml-2'>Choose File</CustomButton>
            </div>
        </div>
    )
}

export default ChooseFile;