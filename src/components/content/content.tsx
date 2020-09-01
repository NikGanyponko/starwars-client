import React from 'react'
import { Layout } from 'antd'
import { IContentData } from '../../interfaces/IStore'

const { Content } = Layout

const Sider = ({ img, description }: IContentData) => {
  return <Content className='content' />
}

export default Sider
