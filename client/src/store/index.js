import { configureStore } from "@reduxjs/toolkit";
import mobileSlices from "./slices/mobileSlices";
const store = configureStore({
    reducer: {
        mobile: mobileSlices
    }
})

export default store;