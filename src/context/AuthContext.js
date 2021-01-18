import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import veggieBackendApi from '../api/veggieBackendApi'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin': 
        //MAY NEED TO CONFIRM IF THIS IS THE PROPER TO ASSIGN STATE ITEMS FROM THE ACTION OBJECT
            return { token: action.payload.token, id: action.payload.id, errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage:''} 
        case 'signout':
            return {token: null, errorMessage: '', id: null}
        default: 
            return state
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await veggieBackendApi.post('/api/v1/auth', { email, password })
        await AsyncStorage.setItem('token', response.token)
        dispatch({ type: 'signin', payload: response })
        navigate('PotentialMatch')
        
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Invalid Name or Password.'
        })
    }    
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispatch({ type: 'signin', payload: token })
        navigate('PotentialMatch')
    } else {
        navigate('Load')
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
    navigate('Load')
}

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage:'', id: null}
)
