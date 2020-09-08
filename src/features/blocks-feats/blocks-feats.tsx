import React from 'react'
import MainFeat from '../main-feat/main-feat'
import {
  fetchPeople,
  fetchPersonById,
  fetchPlanets,
  fetchPlanetById,
  fetchShips,
  fetchShipById,
} from '../feats-thunk'

const People = () => (
  <MainFeat fetchGroup={fetchPeople} fetchItem={fetchPersonById} />
)
const Planets = () => (
  <MainFeat fetchGroup={fetchPlanets} fetchItem={fetchPlanetById} />
)
const Ships = () => (
  <MainFeat fetchGroup={fetchShips} fetchItem={fetchShipById} />
)

export { People, Planets, Ships }
