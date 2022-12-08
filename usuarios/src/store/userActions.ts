// Faz as importações
import UserSlice from '../user/user-slice';
import {AnyAction} from '@reduxjs/toolkit'
import {ThunkAction} from '@reduxjs/toolkit'
import {RootState} from './index'
import {UserModel} from "../models/redux-usuario-models";
import UserService from "../service/userService"


export const userActions=UserSlice.actions

// Define que o usuário será encontrado pelo nome
export const fetchSingleUser=(user_name:string):ThunkAction<void, RootState, unknown, AnyAction>=>{
    return async(dispatch, getState) =>{
        const response:UserModel=await UserService.getSingleUser(user_name);
        dispatch(userActions.setSingleUser(response))
    }
}