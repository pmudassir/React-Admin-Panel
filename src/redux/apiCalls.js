import { publicRequest } from "../requestMethods"
import { userRequest } from "../requestMethods"
import { deleteProductFail, deleteProductStart, deleteProductSuccess, getProductFail, getProductStart, getProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFail())
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart()) 
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFail())
    }
};