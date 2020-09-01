import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFeatsSlice, IListData } from '../interfaces/IStore'
import { IAllPlanetsResponse, IPlanetResponse } from '../interfaces/IApi'

import api from '../modules/api-client'
import { transformPlanetResponse } from '../modules/transform-response'

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

const initialState: IFeatsSlice = {
  listData: [],
  contentData: { img: '', description: [] },
}

const profileSlice = createSlice({
  name: 'featsData',
  initialState,
  reducers: {
    setListData(state, action: PayloadAction<IListData>) {
      const { listData } = action.payload
      state.listData = listData
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.listData = action.payload.results
      })
      .addCase(fetchPlanetById.fulfilled, (state, action) => {
        state.contentData = transformPlanetResponse(action.payload)
      })
  },
})

export const { setListData } = profileSlice.actions

export default profileSlice.reducer
