import {UserModel, UserArrayModel} from "../models/redux-usuario-models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define o estado inicial das informações dos uruários
const initialUserState:UserArrayModel={
    single_user:{
        "userName":"",
        "userEmail":""
    }
}


const userSlice=createSlice({
    name:"Usuário",
    initialState:initialUserState,
    reducers:{
        setSingleUser(state: { single_user: any; }, action:PayloadAction<UserModel>){
            state.single_user=action.payload;
        }
    }
})
export default userSlice;