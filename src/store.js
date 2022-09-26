import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/posts/postsSlice'
import logger from 'redux-logger'
export default configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})