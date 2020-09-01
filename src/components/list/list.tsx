import React from 'react'
import { List as ListAnt, Typography } from 'antd'

const List = ({ listData }: any) => {
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
