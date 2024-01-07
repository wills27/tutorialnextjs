import React, { CSSProperties } from 'react'

const ContentContainer: React.FC<React.PropsWithChildren<{
  className?: string
  style?: CSSProperties
  testId?: string
}>> = ({ className, style, children, testId }) => (
  <div
    style={style}
    className={`r-container ${className || ''}`}
  >
    {children}
  </div>
)

export default ContentContainer
