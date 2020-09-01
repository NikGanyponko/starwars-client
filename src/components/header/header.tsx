import React from 'react'

import { Link } from 'react-router-dom'
import { Layout, Typography } from 'antd'

const { Header: HeaderAnt } = Layout
const { Text } = Typography

const Header = () => {
  return (
    <HeaderAnt className='header'>
      <div className='header-content'>
        <Link to='/planets'>
          <Text>Planets</Text>
        </Link>
        <Link to='/people'>
          <Text>People</Text>
        </Link>
        <Link to='/starships'>
          <Text>Starships</Text>
        </Link>
      </div>
    </HeaderAnt>
  )
}

export default Header
