import React, { PropsWithChildren } from 'react'

const SquareRadioBut: React.FC<PropsWithChildren<{onChange?: () => void}>> = ({ children, onChange }) => {

    return (
        <div>
            <label className='cursor-pointer'>
                <input
                    type='radio'
                    className='peer sr-only'
                    name='pricing'
                    onChange={onChange}
                />
                <div className='w-[90px] h-[90px] mb-4  text-gray-600 rounded-md hover:shadow ring-2 ring-transparent peer-checked:text-color-1 peer-checked:bg-ghostwhite peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-5 items-center relative rounded-[4.95px] box-border w-full h-[90px] border-[1px] border-solid border-whitesmoke-500'>
                        <svg 
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                        >
                        </svg>
                        <p className='text-sm font-semibold'>
                            { children }
                        </p>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default SquareRadioBut;