import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  IAllPlanetsResponse,
  IPlanetResponse,
  IAllPersonResponse,
  IPersonResponse,
  IAllShipResponse,
  IShipResponse,
} from '../interfaces/IApi'
import api from '../modules/api-client'

export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',
  async () => {
    const response = await api.getAllPlanets()
    return response.json() as Promise<IAllPlanetsResponse>
  },
)

export const fetchPlanetById = createAsyncThunk(
  'planets/fetchPlanetById',
  async (id: string) => {
    const response = await api.getPlanetById(id)
    return response.json() as Promise<IPlanetResponse>
  },
)

export const fetchPeople = createAsyncThunk('planets/fetchPeople', async () => {
  const response = await api.getAllPeople()
  return response.json() as Promise<IAllPersonResponse>
})

export const fetchPersonById = createAsyncThunk(
  'planets/fetchPersonById',
  async (id: string) => {
    const response = await api.getPersonById(id)
    return response.json() as Promise<IPersonResponse>
  },
)

export const fetchShips = createAsyncThunk('planets/fetchShips', async () => {
  const response = await api.getAllShips()
  return response.json() as Promise<IAllShipResponse>
})

export const fetchShipById = createAsyncThunk(
  'planets/fetchShipById',
  async (id: string) => {
    const response = await api.getShipById(id)
    return response.json() as Promise<IShipResponse>
  },
)
