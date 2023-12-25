import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobiles: [],
    loading: true,
    error: null,
    pageNo: 0,
    totalItems: null,
    filter: {
        name: "",
        brand: "",
        price: ["", ""],
        type: "",
        processor: "",
        memory: "",
        os: ""
    }
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
        },
        setPageNo(state, action) {
            state.pageNo = action.payload;
        },
        setTotalItems(state, action) {
            state.totalItems = action.payload
        },
        setFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export default mobileSlices.reducer;
export const { fetchMobileStarted, fetchMobileSuccess, fetchMobileFailure, setPageNo, setTotalItems, setFilter } = mobileSlices.actions