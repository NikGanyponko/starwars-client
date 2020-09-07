import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { fetchPlanets, fetchPlanetById } from '../feats-thunk'
import { Content, Sider } from '../../components'
import { matchId } from '../../modules'

const Planets = () => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchPlanets())
  }, [dispatch])

  const planetsData = listData.map((item) => {
    const { url } = item
    const id = matchId(url)
    return {
      title: item.name,
      id: id,
      onItemClick: () => dispatch(fetchPlanetById(id)),
    }
  })

  return (
    <>
      <Sider listData={planetsData} />
      <Content img={contentData.img} description={contentData.description} />
    </>
  )
}

export default Planets
