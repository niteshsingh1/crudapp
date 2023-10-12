import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./feature/users/userSlice"

export const store = configureStore({
  reducer: {
    users:usersReducer
  },
})
