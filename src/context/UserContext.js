import createDataContext from './createDataContext'
import veggieBackendApi from '../api/veggieBackendApi'
import { navigate } from '../navigationRef'

const userReducer = (state, action) => {
    switch (action.type){
        case 'store_user':
            return {...state, user: action.payload}
        default: 
            return state
    }
}

const fetchUserData = dispatch => id => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(resp => resp.json())
    .then(user => { 
        dispatch({ type: 'store_user', payload: user })
    })

} 

const addNewUser = dispatch => async (signin, email, password, newUserObj) => {
    const reqObj = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(newUserObj)
    }
    
    await fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(user => { 
        dispatch({ type: 'store_user', payload: user })
        signin(email, password) 
    })
}


export const { Provider, Context } = createDataContext(
    userReducer, 
    { fetchUserData, addNewUser },
    { user: {} }
)