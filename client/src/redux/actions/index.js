import { COUNTRIES, USER, GAME } from '../constants/index'

const getCountry = () => ({
    type: COUNTRIES.LOAD_SUCCESS
})

const getCountryByName = country => ({
    type: COUNTRIES.LOAD,
    payload: country
})

const setCountry = country => ({
    type: COUNTRIES.LOAD_SUCCESS,
    payload: country
})

const makeRegistration = user => ({
    type: USER.REGISTER_REQUEST,
    payload: user
})

const registerUserSuccess = payload => ({
    type: USER.REGISTER_SUCCESS,
    payload
})

const makeLogin = user => ({
    type: USER.LOGIN_REQUEST,
    payload: user
})

const loginUserSuccess = payload => ({
    type: USER.LOGIN_SUCCESS,
    payload
})

const makeLogout = () => ({
    type: USER.LOGOUT
})

const gameStart = coins => ({
    type: GAME.GAME_LOAD,
    payload: coins
})

const setCoins = data => ({
    type: GAME.GAME_LOAD_SUCCESS,
    payload: data
})

export {
    setCoins,
    gameStart,
    makeLogin,
    makeLogout,
    getCountry,
    setCountry,
    loginUserSuccess,
    makeRegistration,
    getCountryByName,
    registerUserSuccess
}