import {
    createSlice
} from "@reduxjs/toolkit"

const initialState = {
    product: [],
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
        },
        incrementQuantity: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        // For Delete Item From Cart
        delFromCart: (state, action) => {
            const removeItem = state.product.filter((item) => item.id !== action.payload.id);
            state.product = removeItem;
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