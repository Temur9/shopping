import {
    createSlice
} from "@reduxjs/toolkit"

const items = localStorage.getItem('cartProduct') !== null ? JSON.parse(localStorage.getItem('cartProduct')) : []

const initialState = {
    product: items,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.product.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.product.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            localStorage.setItem('cartProduct', JSON.stringify(state.product.map((item) => item)))
        },
        incrementQuantity: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id);
            item.quantity++;
            localStorage.setItem('cartProduct', JSON.stringify(state.product.map((item) => item)))
        },
        decrementQuantity: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
            localStorage.setItem('cartProduct', JSON.stringify(state.product.map((item) => item)))
        },
        // For Delete Item From Cart
        delFromCart: (state, action) => {
            const removeItem = state.product.filter((item) => item.id !== action.payload.id);
            state.product = removeItem;
            localStorage.setItem('cartProduct', JSON.stringify(state.product.map((item) => item)))
        },
    }
})

export const {
    addToCart,
    delFromCart,
    incrementQuantity,
    decrementQuantity,
    calculatePrices,
} = productSlice.actions
export default productSlice.reducer