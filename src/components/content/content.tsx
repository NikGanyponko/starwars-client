import React from 'react'
import { Layout } from 'antd'
import { List, Typography } from 'antd'
import { IContentData } from '../../interfaces/IStore'

const { Content } = Layout
const { Text } = Typography

const Sider = ({ img, description }: IContentData) => {
  return (
    <Content className='content'>
      <div className='content-card'>
        {img && (
          <img src={img} className='content-card__img' alt='logo for card' />
        )}
        <div className='content-card__list'>
          <List
            dataSource={description}
            renderItem={(item: string) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </div>
      </div>
    </Content>
  )
}

export default Sider
