import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    noOfItems: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        ordered: (state, action) => {
            state.noOfItems += 1
            state.totalAmount += action.payload.price
        },
        emptied: (state, action) => {
            state.noOfItems = 0
            state.totalAmount = 0
        }
    }
})

export default cartSlice.reducer
export const {ordered, emptied} = cartSlice.actions

