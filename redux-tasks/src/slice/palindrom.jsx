import { createSlice } from "@reduxjs/toolkit"

const palindrom = createSlice({
    name: 'palindrom',
    initialState: '',
    reducers: {
        checkWord: function (state, data) {
            return data.payload
        }
    }
})

export const { checkWord } = palindrom.actions
export default palindrom.reducer