import { createSlice } from "@reduxjs/toolkit"

const counter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        plusOne: function (state) {
            return state + 1
        },
        minusOne: function (state) {
            return state - 1
        },
        reset: function () {
            return 0
        }
    }
})

export const { plusOne, minusOne, reset } = counter.actions
export default counter.reducer