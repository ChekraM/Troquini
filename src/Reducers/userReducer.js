import {combineReducers} from 'redux'

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "LOG_IN" : 
        return action.connectedUser
        case "LOG_OUT" : 
        return {}
        default :
        return state
    }
}


const Reducers = combineReducers({userReducer})

export default Reducers