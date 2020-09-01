import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { fetchPeople, fetchPersonById } from '../feats-thunk'
import Content from '../../components/content'
import Sider from '../../components/sider'

const People = () => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchPeople())
  })

  const planetsData = listData.map((item) => {
    const id = item.url.match(/\/(\d+?)\//)[1]
    return {
      title: item.name,
      id: id,
      onItemClick: () => dispatch(fetchPersonById(id)),
    }
  })

  return (
    <>
      <Sider listData={planetsData} />
      <Content img={contentData.img} description={contentData.description} />
    </>
  )
}

export default People
