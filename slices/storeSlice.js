import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    store: null,
}
 
export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
         setStore: (state, action) => {
            state.store = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setStore } = storeSlice.actions;

export const selectStore = state=> state.store.store;

export default storeSlice.reducer 