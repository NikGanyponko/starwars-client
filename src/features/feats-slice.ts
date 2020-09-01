import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFeatsSlice, IListData } from '../interfaces/IStore'
import api from '../modules/api-client'

const fetchPlanets = createAsyncThunk('planets/fetchPlanets', async () => {
  const response = await api.getAllPlanet()
  return response.data
})

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
  extraReducers: {
    // TODO in builder https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
    [fetchPlanets.fulfilled]: (state, action) => {
      state.listData = action.payload
    },
  },
})

export const { setListData } = profileSlice.actions

export default profileSlice.reducer
