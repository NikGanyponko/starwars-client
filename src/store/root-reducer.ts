import { combineReducers } from '@reduxjs/toolkit'

import featsReducer from '../features/feats-slice'

const rootReducer = combineReducers({
  feats: featsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
