import { createSlice } from "@reduxjs/toolkit"

const validation = createSlice({
    name: 'validation',
    initialState: false,
    reducers: {
        checkEmail: (state, data) => {
           return /^[\w]+@[A-Za-z]+\.[a-zA-Z]+$/gm.test(data.payload)
        }
    }
})

export const { checkEmail } = validation.actions
export default validation.reducer