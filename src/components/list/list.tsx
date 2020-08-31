import React from 'react'
import { List as ListAnt } from 'antd'

const testData = ['1', '2', '3', '4']

const List = () => {
  return <ListAnt dataSource={testData} />
}
