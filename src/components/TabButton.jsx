import React from 'react'

const TabButton = ({children, selectFunc}) => {
  return (
    <button onClick={selectFunc}>{children}</button>
  )
}

export default TabButton