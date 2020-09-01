import React from 'react'

import Sider from '../../components/sider'
import Content from '../../components/content'

const Planets = () => {
  return (
    <>
      <Sider />
      <Content img='test-url' description={['data1', 'data2', 'data3']} />
    </>
  )
}

export default Planets
