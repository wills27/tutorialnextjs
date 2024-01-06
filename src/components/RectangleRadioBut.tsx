import React from 'react'
import Image from 'next/image';

const RectangleRadioBut: React.FC<{ title: string, icon:any }> = ({ title, icon }) => {
    return (
        <label className=' cursor-pointer'>
            <input
                type='radio'
                className='peer sr-only'
                name='pricing'
            />
            <div className=' w-auto h-auto h-max-[100px] mb-4 bg-ghostwhite text-gray-600 rounded-md hover:shadow ring-2 ring-transparent peer-checked:text-sky-600 peer-checked:ring-sky-500 peer-checked:ring-offset-2'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center'>
                        <Image className='px-5'
                            src={icon}
                            alt="SVG Image"
                        />
                        <div className='flex flex-col'>
                            <p className='text-[16px] font-medium font-montserrat text-color-1 mb-1'>
                                {title}
                            </p>
                            <p className='text-[14px] leading-[19px] font-montserrat text-lightslategray text-left mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id velit eros.
                                Nunc non turpis id arcu suscipit mollis eget vel sapien. Donec condimentum dui justo. </p>
                        </div>
                    </div>
                </div>

            </div>
        </label>
    )
}

export default RectangleRadioBut;