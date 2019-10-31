import { userConstants } from '../constants'
export function registration(state = {} , action){
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return { registering : true };
        case userConstants.REGISTER_FAILURE:
            return { errorData : action.error }
        default:
            return state;
    }
}