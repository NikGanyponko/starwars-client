import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFeatsSlice, IListData } from '../interfaces/IStore'
import { IAllPlanetsResponse } from '../interfaces/IApi'
import api from '../modules/api-client'

export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',
  async () => {
    const response = await api.getAllPlanets()
    return response.json() as Promise<IAllPlanetsResponse>
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
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.listData = action.payload.results
    })
  },
})

export const { setListData } = profileSlice.actions

export default profileSlice.reducer
