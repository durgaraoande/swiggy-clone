
import cartReducer from './cartSlice';
const { configureStore } = require("@reduxjs/toolkit");

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        //user:userReducer,
    }
})

export default appStore;