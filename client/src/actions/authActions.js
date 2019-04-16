import axios from "axios";
import { SET_CURRENT_USER } from '../constants';
import { UPLOAD_TOKEN } from '../constants';
// import Cookies from "js-cookie";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const login = (data = {}) => {
    return dispatch => {
        return axios({
            method: 'post',
            url: 'http://127.0.0.1:7001/login',
            data: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                // 'x-csrf-token':'glorCqj9pLmEijRrlKtRG_Qp',
                // 'Cookie':'csrfToken=glorCqj9pLmEijRrlKtRG_Qp; EGG_SESS=wzGXljZxTuJQvmQRK_97jRKsidpJ_P1r4ki4OF33djhFyb7TxOeKQKMfzzM9cxaSxTMicNxpV0wOVlcMwRYXKjSsqvH4nc-3Bd0RW5qUU7m0R2irmxGfQT0Y_QS6NkjeigcuV6YPtNOBZtLz-go-ug=='
            }
        }).then(res => {
            // dispatch(setCurrentUser())
            console.log(res)
        })
    }
}

export const uploadToken = (token) => {
    console.log(token)
    return {
        type: UPLOAD_TOKEN,
        token
    }
}

export const getToken = (data = {}) => {
    return dispatch => {
        return axios({
            method: 'post',
            url: 'http://127.0.0.1:7001/getToken',
            data: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => {
            dispatch(uploadToken(res.data.data.token))
            console.log(res)
        })
    }
}