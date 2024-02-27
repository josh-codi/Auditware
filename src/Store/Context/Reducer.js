import session from "../Session";
import actions from "./Actions";

const Reducer = (state, action) => {
    switch(action.type){
        case actions.login:
            session.set('isLogin', 'true')
            return {...state, isLogin: true};
        case actions.logout:
            session.set('isLogin', 'false')
            return {...state, isLogin: false};
        case actions.token:
            session.set('token', action.value)
            return {...state, token: action.value};
        default:
            return state
    }
}

export default Reducer