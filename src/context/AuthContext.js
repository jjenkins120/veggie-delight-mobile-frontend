import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import veggieBackendApi from '../api/veggieBackendApi'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'store_token': 
        //MAY NEED TO CONFIRM IF THIS IS THE PROPER TO ASSIGN STATE ITEMS FROM THE ACTION OBJECT
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

// const signin = dispatch => async ({ email, password }) => {
//     try {
//         const response = await veggieBackendApi.post('/api/v1/auth', { email, password })
//         await AsyncStorage.setItem('token', response.data.token)
//         dispatch({ type: 'signin', payload: response })
//         navigate('PotentialMatch')
        
//     } catch (err) {
//         dispatch({
//             type: 'add_error',
//             payload: 'Invalid Name or Password.'
//         })
//     }    
// }

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
        // console.log(data.id)
      if (data.error){
        // console.log(data.error)
        dispatch({ type: 'add_error', payload: data.error })
      } else {
        console.log('hitting the signin with token')
        console.log(data)
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
    // const id = await AsyncStorage.getItem('id')
    if (token && id){
        console.log(token)
        console.log(id)
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
