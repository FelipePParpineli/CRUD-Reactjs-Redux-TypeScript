import {configureStore} from '@reduxjs/toolkit';
import UsersSlice from '../user/user-slice'

const store = configureStore(
    {
        reducer:{user:UsersSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;