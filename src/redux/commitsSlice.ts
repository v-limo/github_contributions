import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../app/store"

export interface CommitsState {
  allCommits: string[]
  status: "idle" | "loading" | "failed"
}

const initialState: CommitsState = {
  allCommits: [],
  status: "idle",
}

export const commitSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = "loading"
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = "idle"
    //     state.value += action.payload
    //   })
    //   .addCase(incrementAsync.rejected, (state) => {
    //     state.status = "failed"
    //   })
  },
})

export const {} = commitSlice.actions

export const selectCommits = (state: RootState) => state.commits.allCommits

export default commitSlice.reducer
