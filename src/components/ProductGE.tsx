import React from 'react'
import Inputfield from './Inputfield';
import PriceInformationArea from './PriceInformationArea';
import InfoLabel from './InfoLabel'
import Image from 'next/image';

const ProductGE: React.FC< {decorationMethod:string, decorationSetup:string, quantity:number, price:number, color:string} > = ({ decorationMethod, decorationSetup, quantity, price, color } ) => {
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
            <div className="font-semibold inline-block">The Viking CollectionTM 20 OZ. Nova Tumbler</div>
            </div>
            <div className='mt-10'>
                <div className=" text-[18px] leading-[21px] capitalize font-medium font-poppins text-color-1 text-left">order summary</div>
                <div className='flex flex-col gap-4 list-none pl-0'>
                    <InfoLabel label="Decoration Method" value={decorationMethod} ></InfoLabel>
                    <InfoLabel label="Decoration Setup Charge" value={decorationSetup} ></InfoLabel>
                    <InfoLabel label="Quantity" value={`${quantity}`} ></InfoLabel>
                    <InfoLabel label="Price" value={`$${price}`} ></InfoLabel>
                    <InfoLabel label="Color" value={color} ></InfoLabel>
                </div>

            </div>
        </div>
    )
}

export default ProductGE;