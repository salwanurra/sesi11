import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  entities: [],
  loading: false
}
export const getPosts = createAsyncThunk('posts/getPosts',
  async() => {
  const response = await axios.get(API)
    return response.data;
})
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true
      state.errorMessage= false
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
      state.loading = false
      state.errorMessage= false
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false
      state.errorMessage= true
    })
  }
})

export default postsSlice.reducer;