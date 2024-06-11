import { createSlice } from "@reduxjs/toolkit";

const inpVal = createSlice({
    name: 'inpVal',
    initialState: '',
    reducers: {
        showInp: function(state, data) {
            return data.payload
        }
    }
})

export const { showInp } = inpVal.actions
export default inpVal.reducer