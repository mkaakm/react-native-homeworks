import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addToCart: (state,{payload})=>{
            const book = state.find(item => item.id === payload.id)
            if (!book){
                state.push(payload)
            }
        },
        removeFromCart:(state,{payload})=>{
            const index = state.findIndex(item => item.id === payload)
            if(index !== -1){
                state.splice(index, 1)
            }
        }
    },
})

const {actions, reducer} = cartSlice
export const {addToCart, removeFromCart} = actions
export default reducer
