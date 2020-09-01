import React from 'react'
import { Layout } from 'antd'
import { IContentData } from '../../interfaces/IStore'

import List from '../list'

const { Content } = Layout

const Sider = ({ img, description }: any) => {
  return (
    <Content className='content'>
      <div className='content-card'>
        <img
          src={'https://starwars-visualguide.com/assets/img/planets/2.jpg'}
          className='content-card__img'
          alt='image'
        />
        <div className='content-card__list'>
          <List listData={description} />
        </div>
      </div>
    </Content>
  )
}

export default Sider
