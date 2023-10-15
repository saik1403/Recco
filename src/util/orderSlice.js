import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderDetails: {}
    },
    reducers: {
        addOrderDetails: (state, action) => {
            state.orderDetails = action.payload
        },
        updateStatus: (state, action) => {
            state.orderDetails.productList[action.payload.id].status = action.payload.data
        }
    }
});

export const { addOrderDetails, updateStatus } = orderSlice.actions;
export default orderSlice.reducer;

