import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

//API calls
const userInfo=fetchUser();
const cartInfo=fetchCart();

//state object
export const initialState={
    user:userInfo,
    foodItems:null,
    cartShow:false,
    cartItems:cartInfo
}

