import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobiles: [],
    loading: true,
    error: null
}

const mobileSlices = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        fetchMobileStarted(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMobileSuccess(state, action) {
            state.loading = false;
            state.mobiles = action.payload;
            state.error = false;
        },
        fetchMobileFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default mobileSlices.reducer;
export const { fetchMobileStarted, fetchMobileSuccess, fetchMobileFailure } = mobileSlices.actions