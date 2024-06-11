import { configureStore } from "@reduxjs/toolkit";
import changeSize from "../slice/changeSize";
import addNum from "../slice/addNum"
import counter from "../slice/counter"
import inpVal from "../slice/inpVal"
import palindrom from "../slice/palindrom"
import text from "../slice/text"

const store = configureStore({
    reducer: {
        changeSize,
        addNum,
        counter,
        inpVal,
        palindrom,
        text
    }
})

export default store