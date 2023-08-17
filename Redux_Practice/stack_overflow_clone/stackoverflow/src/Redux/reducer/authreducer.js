import { LOGIN_USER, REGISTER_USER } from "../actionType";

const initialState = {
    currentUser: null,
  };

export const authreducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case REGISTER_USER:
            const newUser = {...state.currentUser,...payload};
            return {...state,currentUser: newUser};
        case LOGIN_USER:
                // Logic to login user
                // Assuming action.payload contains login credentials
                // const { email, password } = payload;
                
                  return {...state,currentUser: payload};
                
        default:
            return state;
    }
}