import React from 'react'
import List from '../list'

const testData = ['1', '2', '3', '4']

const Sider = () => {
  return (
    <div className='sider'>
      <List listData={testData} />
    </div>
  )
}

export default Sider
