import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'

import { fetchPlanets } from '../feats-slice'
import { transformPlanetResponse } from '../../modules/transform-response'

import Sider from '../../components/sider'
import Content from '../../components/content'

const Planets = () => {
  const history = useHistory()
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
      onItemClick: () => history.push(`/planets/${id}`),
    }
  })

  return (
    <>
      <Sider listData={planetsData} />
      <Content img='test-url' description={['data1', 'data2', 'data3']} />
    </>
  )
}

export default Planets
