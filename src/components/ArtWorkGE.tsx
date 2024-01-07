import React from 'react'
import Inputfield from './Inputfield';
import PriceInformationArea from './PriceInformationArea';
import ChooseFile from './ChooseFile';

const ArtWorkGE: React.FC = () => {
    return (
        <div className='mb-10'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">4. Add You Artwork</h1>
            <ChooseFile/>
            <p className='text-[12px] font-medium font-montserrat  text-color-6 text-left'>
                Option 2
            </p>
            <input className="w-full h-14 bg-gray-100 rounded-md"
                type='text'
                placeholder='Enter text'
            />
            <p className='text-[12px] font-medium font-montserrat  text-color-6 text-left'>
                Option 3
            </p>
            <label className=' cursor-pointer'>
            
                <div className='w-auto h-14 h-max-[100px] bg-whitesmoke-300 text-gray-600 rounded-md hover:shadow ring-2 ring-transparent peer-checked:text-sky-600 peer-checked:ring-sky-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-row'>
                        <input
                        type='checkbox'
                        className='peer sr-only'
                        name='contact'
                        />
                        <p className='text-[16px] font-medium font-montserrat text-black mb-1 pl-3'>
                            Contact me
                        </p>
                    </div>
                </div>
                <div className="text-[14px] leading-[26px] font-montserrat text-dimgray text-left">
                    Our art department will contact you to create a free digital logo or layout.
                </div>
        </label>
        </div>
     )
}   

export default ArtWorkGE;