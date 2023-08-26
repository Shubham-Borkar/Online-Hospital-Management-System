import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  // name of slice (must be unique)
  name: 'auth',
  initialState: {
    status: false,
    role:"NOT_AUTH"
  },
  reducers: {
    // action: action handler
    login: (state) => {
      state.status = true
    },
    // action: action handler
    logout: (state) => {
      state.status = false
    },
    setAsDoctor: (state) => {
      state.role = "ROLE_DOCTOR"
    },
    setAsHelper: (state) => {
      state.role = "ROLE_HELPER"
    },
    setAsAdmin: (state) => {
      state.role = "ROLE_ADMIN"
    },
    setAsPatient: (state) => {
      state.role = "ROLE_PATIENT"
    },
  },
})

export const { login, logout ,setAsAdmin,setAsHelper,setAsDoctor,setAsPatient} = authSlice.actions
export default authSlice.reducer
