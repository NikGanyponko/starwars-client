import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { fetchShips, fetchShipById } from '../feats-thunk'
import { Content, Sider } from '../../components'
import { matchId } from '../../modules/transform-response'

const Ships = () => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchShips())
  }, [dispatch])

  const planetsData = listData.map((item) => {
    const { url } = item
    const id = matchId(url)
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
