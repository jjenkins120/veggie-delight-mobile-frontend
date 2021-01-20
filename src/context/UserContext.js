import createDataContext from './createDataContext'
import veggieBackendApi from '../api/veggieBackendApi'
import { navigate } from '../navigationRef'

const userReducer = (state, action) => {
    switch (action.type){
        case 'fetch_user':
            return {...state, user: action.payload}
        case 'new_user':
            return {...state, user: action.payload}
        default: 
            return state
    }
}

// const fetchUserData = dispatch => async (id) => {
//     const response = await veggieBackendApi.get(`/users/${id}`)
//     dispatch({ type:'fetch_user', payload: response})
// } 

// const addNewUser = dispatch => async (state) => {
//     const response = await veggieBackendApi.post('/users', state)
//     dispatch({ type:'new_user', payload: response})
// }


const fetchUserData = dispatch => id => {
    //     const response = await veggieBackendApi.get(`/users/${id}`)
    //     dispatch({ type:'fetch_user', payload: response})
    fetch(`http://localhost:3000/users/${id}`)
    .then(resp => resp.json())
    .then(user => { 
        console.log(user) 
        dispatch({ type: 'fetch_user', payload: user })
        // navigate('PotentialMatch')
    })

} 



const addNewUser = dispatch => state => {
    // console.log(email)
    // console.log(password)
    const reqObj = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(state)
    }
    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(user => { 
        console.log(user) 
        dispatch({ type: 'new_user', payload: user })
        // navigate('PotentialMatch')
    })
}


export const { Provider, Context } = createDataContext(
    userReducer, 
    { fetchUserData, addNewUser },
    { user: {} }
)