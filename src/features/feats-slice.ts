import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFeatsSlice {
  listData: string[]
  contentData: {
    img: string
    description: string[]
  }
}

const initialState: IFeatsSlice = {
  listData: [],
  contentData: { img: '', description: [] },
}

const profileSlice = createSlice({
  name: 'featsData',
  initialState,
  reducers: {
    setListData(state, action: PayloadAction<{ listData: string[] }>) {
      const { listData } = action.payload
      state.listData = listData
    },
  },
})

export const { setListData } = profileSlice.actions

export default profileSlice.reducer
