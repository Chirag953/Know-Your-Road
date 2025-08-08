import {createSlice} from '@reduxjs/toolkit';


const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {
       loading: false,
    },
    reducers: {
       showLoader: (state) => {
          state.loading = true;
       },
       hideLoader: (state) => {
          state.loading = false;
       },
    },
})

export const {showLoader, hideLoader} = loadersSlice.actions;
export default loadersSlice.reducer;