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
    console.log(id)
    fetch(`http://localhost:3000/users/${id}`)
    .then(resp => resp.json())
    .then(user => { 
        dispatch({ type: 'store_user', payload: user })
        // navigate('PotentialMatch')
    })

} 



const addNewUser = dispatch => async (signin, email, password, newUserObj) => {
    console.log(email)
    console.log(password)
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
        console.log(user)
        dispatch({ type: 'store_user', payload: user })
        signin(email, password) 
    })
}


export const { Provider, Context } = createDataContext(
    userReducer, 
    { fetchUserData, addNewUser },
    { user: {} }
)