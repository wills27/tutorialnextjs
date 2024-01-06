import React from 'react'
import Inputfield from './Inputfield';
import PriceInformationArea from './PriceInformationArea';

const QuantityGE: React.FC = () => {
    return (
        <div className='mb-10'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">1. Quantity & Price</h1>
            <Inputfield/>
            <PriceInformationArea/>       
        </div>
     )
}

export default QuantityGE;