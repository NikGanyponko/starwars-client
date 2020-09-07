import React from 'react'
import { List as ListAnt, Typography } from 'antd'
import { IListProps, IListItem } from '../../interfaces/IList'

const { Text } = Typography

const ItemList = ({ id, title, onItemClick }: IListItem) => {
  return (
    <ListAnt.Item className='clickable' key={id} onClick={onItemClick}>
      <Text className='list-item__text margin-left1'>{title}</Text>
    </ListAnt.Item>
  )
}

const List = ({ listData }: IListProps) => {
  return <ListAnt dataSource={listData} renderItem={ItemList} />
}

export default List
