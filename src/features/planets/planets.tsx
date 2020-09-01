import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/root-reducer'

import Sider from '../../components/sider'
import Content from '../../components/content'

const Planets = () => {
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )
  return (
    <>
      <Sider />
      <Content img='test-url' description={['data1', 'data2', 'data3']} />
    </>
  )
}

export default Planets
