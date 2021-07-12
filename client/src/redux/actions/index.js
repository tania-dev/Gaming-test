import { COUNTRIES } from '../constants/index'

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

export {
    getCountry,
    setCountry,
    getCountryByName
}