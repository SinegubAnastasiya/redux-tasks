import { createSlice } from "@reduxjs/toolkit"

const text = createSlice({
    name: 'text',
    initialState: 'Text',
    reducers: {
        showText: () => true,
        hideText: () => false
    }
})

export const { showText, hideText } = text.actions
export default text.reducer