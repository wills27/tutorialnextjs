import React from 'react'

interface CustomFooterProps {
    /* your props definition here */
}

const CustomFooter: React.FC<CustomFooterProps> = (props) => {
    return (
        <div>
            <p className="text-[16px] leading-[26px] font-montserrat text-left inline-block text-dimgray">
                <span>{`All Orders are Manually checked by our team for accuracy and customer satisfaction. call `}</span>
                <span className="text-crimson">(888) 212 - 5501</span>
                <span> for more information.</span>
            </p>
        </div>
    )
}

export default CustomFooter;