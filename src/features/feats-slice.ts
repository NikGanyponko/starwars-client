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
      .addCase(fetchPlanets.rejected, (state) => {
        state.listData = []
      })
      .addCase(fetchPlanetById.fulfilled, (state, action) => {
        state.contentData = transformPlanetResponse(action.payload)
      })
      .addCase(fetchPlanetById.rejected, (state) => {
        state.contentData = { img: '', description: [] }
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.listData = action.payload.results
      })
      .addCase(fetchPeople.rejected, (state) => {
        state.listData = []
      })
      .addCase(fetchPersonById.fulfilled, (state, action) => {
        state.contentData = transformPersonResponse(action.payload)
      })
      .addCase(fetchPersonById.rejected, (state) => {
        state.contentData = { img: '', description: [] }
      })
      .addCase(fetchShips.fulfilled, (state, action) => {
        state.listData = action.payload.results
      })
      .addCase(fetchShips.rejected, (state) => {
        state.listData = []
      })
      .addCase(fetchShipById.fulfilled, (state, action) => {
        state.contentData = transformShipResponse(action.payload)
      })
      .addCase(fetchShipById.rejected, (state) => {
        state.contentData = { img: '', description: [] }
      })
  },
})

export const { clearContentData } = profileSlice.actions

export default profileSlice.reducer
