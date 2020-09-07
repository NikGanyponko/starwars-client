import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearContentData } from '../../features/feats-slice'
import { Layout, Typography } from 'antd'

const { Header: HeaderAnt } = Layout
const { Text } = Typography

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const menuItemClick = (path: string) => {
    dispatch(clearContentData)
    history.push(path)
  }

  const planetsClick = () => menuItemClick('/planets')
  const peopleClick = () => menuItemClick('/people')
  const shipsClick = () => menuItemClick('/star-ships')

  return (
    <HeaderAnt className='header'>
      <div className='header-content'>
        <div className='clickable' onClick={planetsClick}>
          <Text className='header-content__text'>Planets</Text>
        </div>
        <div className='clickable' onClick={peopleClick}>
          <Text className='header-content__text'>People</Text>
        </div>
        <div className='clickable' onClick={shipsClick}>
          <Text className='header-content__text'>Starships</Text>
        </div>
      </div>
    </HeaderAnt>
  )
}

export default Header
