import React from 'react'
import CustomButton from './CustomButton';

interface CustomFooterProps {
  /* your props definition here */
}

const CustomFooter: React.FC<CustomFooterProps> = (props) => {
    return (
        <div className='mt-10'>
            <p className="text-[16px] leading-[26px] font-montserrat text-left inline-block text-dimgray">
                <span>{`All Orders are Manually checked by our team for accuracy and customer satisfaction. call `}</span>
                <span className="text-crimson">(888) 212 - 5501</span>
                <span> for more information.</span>
            </p>
            <div className='flex flex-row gap-2 justify-center'>
                <CustomButton/>
                <CustomButton/>
            </div>
        </div>
     )
}

export default CustomFooter;