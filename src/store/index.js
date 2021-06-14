import { configureStore } from '@reduxjs/toolkit'
import unversityReducer from '../reducers/universityReducer';

export default configureStore({
  reducer: {
      universities: unversityReducer
  },
})