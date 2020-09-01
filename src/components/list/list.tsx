import React from 'react'
import { List as ListAnt, Typography } from 'antd'
import { IListProps, IListItem } from '../../interfaces/IStore'

const { Text } = Typography

const ItemList = ({ id, title, onItemClick }: IListItem) => {
  return (
    <ListAnt.Item key={id} onClick={onItemClick}>
      <Text>{title}</Text>
    </ListAnt.Item>
  )
}

const ItemSimpleList = (text: string) => (
  <ListAnt.Item>
    <Text>{text}</Text>
  </ListAnt.Item>
)

const List = ({ listData }: IListProps) => {
  return <ListAnt dataSource={listData} renderItem={ItemList} />
}

export default List
