import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFeatsSlice, IListData } from '../interfaces/IStore'

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
})

export const { setListData } = profileSlice.actions

export default profileSlice.reducer
