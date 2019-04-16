import { UPLOAD_TOKEN } from '../constants';

let initialState = {
    token: ''
}

const token = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_TOKEN:
            return {
                token: action.token
            }
        default:
            return state
    }
}

export default token;