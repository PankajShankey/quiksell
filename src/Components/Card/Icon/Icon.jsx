import React from 'react'

const Icon = ({imgSrc}) => {
  return (
    <img src={imgSrc} alt="Urgent Icon" style={styles.icon} />
  )
}
const styles = {
    icon: {
        width: '24px',
        height: '24px',
        marginRight: '8px',
    },
}

export default Icon