import React, { PropsWithChildren } from 'react'

const Inputfield: React.FC<PropsWithChildren<{value:any, className?:string, type?:string, placeholder?:string, onChange: (value:string) => void}>> = ( {value, className, type, placeholder, onChange, children} ) => {
    return (
        <div>
            <p className="inline text-black text-base font-medium font-['Montserrat']"> {children} </p>
            <input className={className}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Inputfield;