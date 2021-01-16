import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import veggieBackendApi from '../api/veggieBackendApi'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin': 
            return { token: action.payload, errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage:''} 
        case 'signout':
            return {token: null, errorMessage: ''}
        default: 
            return state
    }
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
//this function will check to see if the user has a token when revisiting the page -this way, if they've signed in they don't need to re-sign in

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
    // return async ({ email, password }) => {
    // because this function contains only one item to return, we can use implicit return (removing the return statement and putting the beginning of the function call on the first line). This is best practice for refactoring.
    
    try {
        const response = await veggieBackendApi.post('/api/v1/auth', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        //this puts the token 'in storage' for us, allowing us to use and persist this information on reload
        //response.data is an object that has a token property
        //when using setItem, the first arg('token') is what we are assigning what we are storing, and the second item is what we are storing (in this case, the token)
        //THERE IS CURRENTLY AN ISSUE WITH ASYNCSTORAGE - REQUIRES FURTHER DEBUGGING
        
        dispatch({ type: 'signin', payload: response.data.token })

        navigate('PotentialMatch')
        //this is a function that we imported from navigationRef. The logic in that file's functions essentially allow us to access react navigation from within our components and navigate among screens quickly

    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Something went wrong with sign up.'
        })
    }
}
//whenever we create an action function, it will be a function called with dispatch that is going return a function
//the returned function is what is actually being called inside our component
//we get access to dispatch via the boundActions in our createDataContext function
//we need to make an api request and try to signup with the email and password provided from the component(and passed as an object for arguments here - destructured), if we are able to sign up, then we want to show in our global state that we are authenticated. If signing up fails, we need to show an error message

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await veggieBackendApi.post('/api/v1/auth', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('PotentialMatch')

    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in.'
        })
    }    
    
}
//similar to signup above

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
    navigate('Load')
}
//this allows us to get rid of the token, which essentially forces the user back to the signin screen and effectively signing them out


export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage:''}
)
//reducer = authReducer
//actions = { signin, signout, signup... }
//defaultState= {token: null, errorMessage} - the errorMessage allows us to give the user an error message based on the action they are trying to complete. By default its an empty string
