import React from 'react'
import noMatchLogo from '../../assets/404.jpg'

const NoMatch = () => {
  return (
    <div className='no-match'>
      <img className='no-match__img' src={noMatchLogo} alt='404 for page' />
    </div>
  )
}

export default NoMatch
