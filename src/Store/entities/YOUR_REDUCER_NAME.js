import { createSlice } from "@reduxjs/toolkit";

const YOUR_REDUCER_NAME = createSlice({
  name: "YOUR_REDUCER_NAME",
  initialState: {
    count: 0,
  },
  reducers: {
    INCREASE: (store) => {
      store.count = store.count + 1;
    },
    DECREASE: (store) => {
      store.count = store.count - 1;
    },
  },
});

export default YOUR_REDUCER_NAME.reducer;

export const { INCREASE, DECREASE } = YOUR_REDUCER_NAME.actions;
