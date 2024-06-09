import { configureStore } from "@reduxjs/toolkit";
import changeSize from "../slice/changeSize";

const store = configureStore({
    reducer: {
        changeSize: changeSize
    }
})

export default store