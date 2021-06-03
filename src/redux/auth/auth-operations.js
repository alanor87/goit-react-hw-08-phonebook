import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
     },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    }
}

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());
    axios.post('/users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data));
        })
        .catch(error => dispatch(authActions.registerError(error.message)));
}

const login = credentials => dispatch => {
    dispatch(authActions.loginRequest());
    axios.post('/users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.loginSuccess(response.data))
        })
        .catch(error => dispatch(authActions.loginError(error.message)));
}

const logout = () => dispatch => {
    dispatch(authActions.logoutRequest());
    axios.post('/users/logout')
        .then(() => {
            token.unset();
            dispatch(authActions.logoutSuccess())
        })
        .catch(error => dispatch(authActions.logoutError(error.message)));
}

const getCurrentUser = () => (dispatch, getState) => {
    const persistedToken = getState().auth.token;
    if (!persistedToken) return;
    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest);
    axios.get('/users/current')
        .then(response => dispatch(authActions.getCurrentUserSuccess(response.data)))
        .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
}

export default {
    register,
    login,
    logout,
    getCurrentUser
}