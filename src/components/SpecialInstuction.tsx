import React from 'react'
import Inputfield from './Inputfield';
import PriceInformationArea from './PriceInformationArea';

const SpecialInstuction: React.FC = () => {
    return (
        <div className='mb-20'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">5. Special Instuction</h1>

            <p className="relative text-[12px] font-medium font-montserrat text-color-6 text-left">Special Instructions - Optional</p>
            <input className="w-full h-28 bg-gray-100 rounded-md"
                type='text'
                placeholder='Tell us anything to help your artist to deliver your eperoof to your liking.'
            />
        </div>
        
     )
}

export default SpecialInstuction;