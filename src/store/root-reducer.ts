import { combineReducers } from '@reduxjs/toolkit'

import featsSliceReducer from '../features/feats-slice'

const rootReducer = combineReducers({
  featsSlice: featsSliceReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
