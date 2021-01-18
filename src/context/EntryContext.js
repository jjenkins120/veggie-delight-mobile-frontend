import createDataContext from './createDataContext'
import { navigate } from '../navigationRef'

const entryReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'add_email': 
            return {...state, email: action.payload}
        case 'add_password': 
            return {...state, password: action.payload}
        case 'add_first_name': 
            return {...state, firstName: action.payload}
        case 'add_birth_date': 
            return {...state, birthDate: action.payload}
        case 'add_profile_img_url': 
            return {...state, profileImgUrl: action.payload}
        case 'add_veggie_type': 
            return {...state, veggieType: action.payload}
        case 'add_bio': 
            return {...state, bio: action.payload}
        case 'add_how_far': 
            return {...state, howFar: action.payload}
        case 'add_interested_in': 
            return {...state, interestedIn: action.payload}
        default: 
            return state
    }
}

const signinEmail = dispatch => input => {
    dispatch({ type: 'add_email', payload: input})
    navigate('PasswordSignin')
}

const signinPassword = dispatch => input => {
    dispatch({ type: 'add_password', payload: input})
}

const addEmail = dispatch => input => {
    dispatch({ type: 'add_email', payload: input})
    navigate('PasswordSignup')
}

const addPassword = dispatch => input => {
    dispatch({ type: 'add_password', payload: input})
    navigate('FirstNameSignup')
}

const addFirstName = dispatch => input => {
    dispatch({ type: 'add_first_name', payload: input})
    navigate('BirthDateSignup')
}

const addBirthDate = dispatch => input => {
    dispatch({ type: 'add_birth_date', payload: input})
    navigate('ProfileImgUrlSignup')
}

const addProfileImgUrl = dispatch => input => {
    dispatch({ type: 'add_profile_img_url', payload: input})
    navigate('VeggieTypeSignup')
}

const addVeggieType = dispatch => input => {
    dispatch({ type: 'add_veggie_type', payload: input})
    navigate('BioSignup')
}

const addBio = dispatch => input => {
    dispatch({ type: 'add_bio', payload: input})
    navigate('HowFarSignup')
}

const addHowFar = dispatch => input => {
    dispatch({ type: 'add_how_far', payload: input})
    navigate('InterestedInSignup')
}
 
const addInterestedIn = dispatch => input => {
    dispatch({ type: 'add_interested_in', payload: input})
}

export const { Provider, Context } = createDataContext(
    entryReducer, 
    { 
        signinEmail,
        signinPassword, 

        addEmail,
        addPassword, 
        addFirstName, 
        addBirthDate, 
        addVeggieType,
        addBio, 
        addProfileImgUrl,
        addHowFar,
        addInterestedIn
    },
    { 
        email:'', 
        password:'', 
        firstName: '',
        birthDate: '',
        veggieType: '',
        bio: '',
        profileImgUrl: '',
        interestedIn: '',
        howFar: 0,
    }
)

