import React from 'react';

const Link = ({ active, children, filter, onClick }) => {
  if (active) {
    return <span>{children}</span>
  } 
  
  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick(filter)
      }}
    >
      {children}
    </a>
  )
}

export default Link
