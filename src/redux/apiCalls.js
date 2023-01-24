import { publicRequest } from "../requestMethods"
import { userRequest } from "../requestMethods"
import { addProductFail, 
        addProductStart, 
        addProductSuccess, 
        deleteProductFail, 
        deleteProductStart, 
        deleteProductSuccess, 
        getProductFail, 
        getProductStart, 
        getProductSuccess, 
        updateProductFail, 
        updateProductStart, 
        updateProductSuccess } from "./productRedux";
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

export const updateProduct = async (product, id, dispatch) => {
    dispatch(updateProductStart()) 
    try {
        //update
        // const res = await userRequest.put(`/products/${id}`)
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFail())
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart()) 
    try {
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFail())
    }
};