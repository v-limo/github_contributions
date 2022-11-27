import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { Commit, Repo } from "../types"

import axios from "axios"

export interface CommitsState {
  allCommits: Commit[]
  status: "idle" | "loading" | "failed"
  yearlyCommits: { [key: string]: Commit[] }
}

const initialState: CommitsState = {
  allCommits: [],
  status: "idle",
  yearlyCommits: {},
}

export const commitSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {
    sortCommitsByDate: (state) => {
      state.allCommits.sort((a, b) => {
        return (
          new Date(b.commit.author.date).getTime() -
          new Date(a.commit.author.date).getTime()
        )
      })
    },

    sortCommitsByYear: (state) => {
      state.allCommits.forEach((commit) => {
        const year = new Date(commit.commit.author.date).getFullYear()
        if (state.yearlyCommits[year]) {
          state.yearlyCommits[year].push(commit)
        } else {
          state.yearlyCommits[year] = [commit]
        }
      })
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCommits.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCommits.fulfilled, (state, action) => {
        state.status = "idle"
        state.allCommits = action.payload
      })
      .addCase(fetchCommits.rejected, (state) => {
        state.status = "failed"
      })
  },
})

const fetchCommits = createAsyncThunk(
  "commits/fetchCommits",
  async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    )
    const repos: Repo[] = response.data
    const commits: Commit[] = []
    for (const repo of repos) {
      const response = await axios.get(
        `https://api.github.com/repos/${username}/${repo.name}/commits`
      )
      const repoCommits: Commit[] = response.data
      commits.push(...repoCommits)
    }
    return commits
  }
)

export const {} = commitSlice.actions

export const selectCommits = (state: RootState) => state.commits.allCommits

export default commitSlice.reducer
