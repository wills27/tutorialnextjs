import React from 'react'
import SquareRadioBut from './SquareRadioBut';

const ColorGE: React.FC = () => {
    return (
        <div>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">3. Select Color</h1>
            <div className='grid grid-cols-7 gap-4'>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
                <SquareRadioBut/>
            </div>
        </div>
     )
}

export default ColorGE;