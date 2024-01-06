import React from 'react'

const Inputfield: React.FC = () => {
    return (
        <div>
            <p className="inline text-black text-base font-medium font-['Montserrat']">Enter Quantity :</p>
            <input className="w-32 h-9 top-0 bg-gray-100 rounded-md"
                type='text'
                placeholder='50 Min'
            />
        </div>
    )
}

export default Inputfield;