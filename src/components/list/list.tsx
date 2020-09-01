import React from 'react'
import { List as ListAnt, Typography } from 'antd'
import { IListData } from '../../interfaces/IStore'

const List = ({ listData }: IListData) => {
  return (
    <ListAnt
      dataSource={listData}
      renderItem={(item: string) => (
        <ListAnt.Item>
          <Typography.Text mark>{item}</Typography.Text>
        </ListAnt.Item>
      )}
    />
  )
}

export default List
