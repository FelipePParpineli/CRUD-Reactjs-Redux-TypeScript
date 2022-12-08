import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {fetchSingleUser} from "../store/userActions";
import {useState} from 'react'
import './User.css'
import React from "react";

const UserApp=()=>{
    const [user_name, setUser_name]=useState("");
    const dispatch=useAppDispatch();
    const singleUser=useAppSelector(state=>state.user.single_user);
    const searchHandler=()=>{
        dispatch(fetchSingleUser(user_name))
    }
    const checksingleuser=():boolean=>{
        if(singleUser.userName===""){
            return false
        }
        return true
    }

    return (
        <>

            <div> 
                <label>Insira o nome:</label>
                <input onChange={(event) => (setUser_name(event.target.value))} type="string"/>
                <button onClick={searchHandler}> Find</button>
                <div>
                    <h3>Usuário único</h3>
                    {
                        checksingleuser() &&
                        (
                            <div className="usuarioContainer" key={singleUser.userName}>
                                <p className="user-1"> singleUser.userName</p>
                                <p className="user-2"> singleUser.userEmail</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
}

export default UserApp;