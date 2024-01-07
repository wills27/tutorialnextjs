import React from 'react'
import PriceBox from './PriceBox';

const PriceInformationArea: React.FC = () => {
    return (
        <div>
            <p className="mb-4 text-black text-base font-medium font-['Montserrat']">Price Information</p>
            <div className='w-auto flex flex-row gap-4'>
                <PriceBox price={'$2.80'} discountPrice={'$4.42'} quantityRange={'150-249'} />
                <PriceBox price={'$3.25'} discountPrice={'$4.22'} quantityRange={'250-999'} />
                <PriceBox price={'$3.10'} discountPrice={'$4.03'} quantityRange={'1000-7499'} freeSetup={true} />
                <PriceBox price={'$3.00'} discountPrice={'$3.90'} quantityRange={'7500'} freeSetup={true} />
                <PriceBox price={'$3.00'} discountPrice={'$3.90'} quantityRange={'7500'} freeSetup={true} />
            </div>
        </div>
     )
}

export default PriceInformationArea;