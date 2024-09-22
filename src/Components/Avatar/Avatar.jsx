import React from 'react'
import './Avatar.css'
const Avatar = ({usr}) => {
    const getInitials = (name) => {
        return name
          .split(' ')
          .map(part => part[0].toUpperCase()) // Take the first letter of each part and capitalize it
          .join(''); // Combine the letters
      };
    
  return (
    <div className='avatar-container'>
  <div className='avatar'>{getInitials(usr.name)}</div>
  <span className={`status-dot ${usr.available ? 'active' : 'inactive'}`}></span>

</div>

  )
}

export default Avatar