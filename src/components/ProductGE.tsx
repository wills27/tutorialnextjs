import React from 'react'
import Inputfield from './Inputfield';
import PriceInformationArea from './PriceInformationArea';
import InfoLabel from './InfoLabel';
import Image from 'next/image';

const ProductGE: React.FC = () => {
    return (
        <div className='mb-10'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">Product Details</h1>
            <div className=" w-full h-[73px] text-left text-[18px] text-color-6 font-montserrat">
                <Image 
                    className="rounded-md w-[73px] h-[73px] object-cover" 
                    src={"/images/viking.png"}
                    width={50}
                    height={50}
                    alt="" 
                    
                />
                <div className="font-semibold inline-block w-[331px]">The Viking CollectionTM 20 OZ. Nova Tumbler</div>
            </div>
            <div className='mt-10'>
                <div className=" text-[18px] leading-[21px] capitalize font-medium font-poppins text-color-1 text-left">order summary</div>
                <div className='flex flex-col gap-4'>
                    <InfoLabel label={'Decoration Method'} value={'Laser Engraving'} ></InfoLabel>
                    <InfoLabel label={'Decoration Setup Charge'} value={'$5'} ></InfoLabel>
                    <InfoLabel label={'Quantity'} value={'150'} ></InfoLabel>
                    <InfoLabel label={'Price'} value={'$701.76'} ></InfoLabel>
                    <InfoLabel label={'Color'} value={'Purple'} ></InfoLabel>
                </div>
            </div>
        </div>
     )
}

export default ProductGE;