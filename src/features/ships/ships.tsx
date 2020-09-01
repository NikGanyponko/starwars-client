import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { fetchShips, fetchShipById } from '../feats-thunk'
import Content from '../../components/content'
import Sider from '../../components/sider'

const Ships = () => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchShips())
  }, [])

  const planetsData = listData.map((item) => {
    const id = item.url.match(/\/(\d+?)\//)[1]
    return {
      title: item.name,
      id: id,
      onItemClick: () => dispatch(fetchShipById(id)),
    }
  })

  return (
    <>
      <Sider listData={planetsData} />
      <Content img={contentData.img} description={contentData.description} />
    </>
  )
}

export default Ships
