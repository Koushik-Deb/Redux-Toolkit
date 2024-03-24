import { createSlice } from "@reduxjs/toolkit";

// Reducer // Create Slice
let id = 0;
const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
        age: action.payload.age,
      });
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
