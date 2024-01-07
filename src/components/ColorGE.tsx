import React from 'react'
import SquareRadioBut from './SquareRadioBut';

const ColorGE: React.FC < { colorList:string[] } > = ( { colorList }) => {
    return (
        <div>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">3. Select Color</h1>
            <div className='grid grid-cols-7 gap-4'>
            {
                colorList.map((color, index) => (
                    <div key={index}>
                        <SquareRadioBut>{color}</SquareRadioBut>
                    </div>
                ))

            }
            </div>
        </div>
     )
}

export default ColorGE;