import React from 'react'
import RectangleRadioBut from './RectangleRadioBut';
import laser_svg from '../../public/laser.svg'
import color_svg from '../../public/colorlocation.svg'


const ImprintGE: React.FC = () => {
    return (
        <div className='mb-10'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">2. Select Imprint Method</h1>
            <div className=''>
                <RectangleRadioBut title='Laser Engraving' icon={laser_svg}/>
                <RectangleRadioBut title='1 Color, 1 Location Imprint' icon={color_svg}/>
            </div>
        </div>
     )
}

export default ImprintGE;