import { configureStore } from "@reduxjs/toolkit";
import changeSize from "../slice/changeSize";
import addNum from "../slice/addNum"

const store = configureStore({
    reducer: {
        changeSize: changeSize,
        addNum: addNum
    }
})

export default store