import { createSlice } from "@reduxjs/toolkit"

const addNum = createSlice({
    name: 'addNum',
    initialState: 1,
    reducers: {
        counter: function (state) {
            return state + 1
        }
    }
})

export const { counter } = addNum.actions
export default addNum.reducer