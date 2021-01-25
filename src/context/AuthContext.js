import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'store_token': 
            return {...state, token: action.payload }
        case 'store_id':
            return { ...state, id: action.payload }
        case 'clear_error_message':
            return {...state, errorMessage:''} 
        case 'signout':
            return {token: null, errorMessage: '', id: null}
        default: 
            return state
    }
}

const signin = dispatch => (email, password) => {
    const authObj = { 
        email: email, 
        password: password
    }
    const reqObj = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(authObj)
    }
    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error){
        dispatch({ type: 'add_error', payload: data.error })
      } else {
        AsyncStorage.setItem('token', data.token)
        AsyncStorage.setItem('id', data.id.toString()) 
        dispatch({ type: 'store_token', payload: data.token })
        dispatch({ type: 'store_id', payload: data.id })
        navigate('PotentialMatch')
      }
    })
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
    const [token, id] = await Promise.all([AsyncStorage.getItem('token'), AsyncStorage.getItem('id')])
    if (token && id){
        dispatch({ type: 'store_token', payload: token })
        dispatch({ type: 'store_id', payload: parseInt(id) })
        navigate('PotentialMatch')
    } else {
        navigate('Load')
    }
}

const signout = dispatch => async () => {
    await Promise.all([AsyncStorage.removeItem('token'), AsyncStorage.removeItem('id')])
    dispatch({ type: 'signout'})
    navigate('Load')
}

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage:'', id: null}
)
