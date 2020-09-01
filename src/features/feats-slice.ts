import { createSlice } from '@reduxjs/toolkit'
import { IFeatsSlice } from '../interfaces/IStore'
import {
  fetchPlanets,
  fetchPlanetById,
  fetchPeople,
  fetchPersonById,
  fetchShipById,
  fetchShips,
} from './feats-thunk'
import {
  transformPlanetResponse,
  transformPersonResponse,
  transformShipResponse,
} from '../modules/transform-response'

const initialState: IFeatsSlice = {
  listData: [],
  contentData: { img: '', description: [] },
}

const profileSlice = createSlice({
  name: 'featsData',
  initialState,
  reducers: {
    clearContentData(state) {
      state.contentData = { img: '', description: [] }
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
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.listData = action.payload.results
      })
      .addCase(fetchPersonById.fulfilled, (state, action) => {
        state.contentData = transformPersonResponse(action.payload)
      })
      .addCase(fetchShips.fulfilled, (state, action) => {
        state.listData = action.payload.results
      })
      .addCase(fetchShipById.fulfilled, (state, action) => {
        state.contentData = transformShipResponse(action.payload)
      })
  },
})

export const { clearContentData } = profileSlice.actions

export default profileSlice.reducer
