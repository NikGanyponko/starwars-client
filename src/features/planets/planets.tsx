import React, { useEffect } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'

import { fetchPlanets, fetchPlanetById } from '../feats-slice'
import { transformPlanetResponse } from '../../modules/transform-response'

import Sider from '../../components/sider'
import Content from '../../components/content'

const Planets = () => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchPlanets())
  }, [])

  const planetsData = listData.map((item) => {
    const id = item.url.match(/\/(\d+?)\//)[1]
    return {
      title: item.name,
      id: id,
      onItemClick: () => dispatch(fetchPlanetById(id)),
    }
  })

  console.log('contentData', contentData)

  return (
    <>
      <Sider listData={planetsData} />
      <Content img={contentData.img} description={contentData.description} />
    </>
  )
}

export default Planets
