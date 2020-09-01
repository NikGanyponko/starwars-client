import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearContentData } from '../../features/feats-slice'
import { Layout, Typography } from 'antd'

const { Header: HeaderAnt } = Layout
const { Text } = Typography

const Header = () => {
  const dispatch = useDispatch()

  return (
    <HeaderAnt className='header'>
      <div className='header-content'>
        <Link
          to={(location) => {
            dispatch(clearContentData())
            return { ...location, pathname: '/planets' }
          }}>
          <Text>Planets</Text>
        </Link>
        <Link
          to={(location) => {
            dispatch(clearContentData())
            return { ...location, pathname: '/people' }
          }}>
          <Text>People</Text>
        </Link>
        <Link
          to={(location) => {
            dispatch(clearContentData())
            return { ...location, pathname: '/starships' }
          }}>
          <Text>Starships</Text>
        </Link>
      </div>
    </HeaderAnt>
  )
}

export default Header
