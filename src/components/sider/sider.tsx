import React from 'react'
import { IListProps } from '../../interfaces/IList'
import List from '../list'

const Sider = ({ listData }: IListProps) => {
  return (
    <div className='sider'>
      <List listData={listData} />
    </div>
  )
}

export default Sider
