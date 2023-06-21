import React from 'react'

export const Quote = ({ dynamicContent, children }) => {
  return (
    <div className='max-w-[1220px] mx-auto'>
      <div
        dangerouslySetInnerHTML={{ __html: dynamicContent }}
      >
      </div>
    </div>
  )
}
