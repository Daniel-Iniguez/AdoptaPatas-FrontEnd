import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: 'Izco',
    email: 'izco.g.leon@gmail.com'
  },
  reducers: {
    update: (state, action) => {

    }
  }
})