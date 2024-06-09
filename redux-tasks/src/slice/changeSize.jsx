import { createSlice } from "@reduxjs/toolkit"

const changeSize = createSlice({
    name: 'changeSize',
    initialState: 18,
    reducers: {
        plusSize: function (state) {
            return state + 1
        },
        minusSize: function (state) {
            return state - 1
        }
    }
})

export const { plusSize, minusSize } = changeSize.actions
export default changeSize.reducer