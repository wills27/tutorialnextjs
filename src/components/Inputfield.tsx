import React, { PropsWithChildren } from 'react'

const Inputfield: React.FC<PropsWithChildren<{className?:string, type?:string, placeholder?:string, onChange: (value:string) => void}>> = ( {className, type, placeholder, onChange, children} ) => {
    return (
        <div>
            <p className="inline text-black text-base font-medium font-['Montserrat']"> {children} </p>
            <input className={className}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Inputfield;