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
            return {...state, first_name: action.payload}
        case 'add_birth_date': 
            return {...state, birth_date: action.payload}
        case 'add_profile_img_url': 
            return {...state, profile_img_url: action.payload}
        case 'add_veggie_type': 
            return {...state, veggie_type: action.payload}
        case 'add_bio': 
            return {...state, bio: action.payload}
        // case 'add_how_far': 
        //     return {...state, how_far: action.payload}
        case 'add_gender': 
            return {...state, gender: action.payload}
        case 'add_interested_in_gender': 
            return {...state, interested_in_gender: action.payload}
        // case 'add_interested_in_veggie': 
        //     return {...state, interested_in_veggie: action.payload}
        case 'add_interested_in_location': 
            return {...state, interested_in_location: action.payload}
        case 'add_interested_in_age': 
            return {...state, interested_in_age: action.payload}
        default: 
            return state
    }
}

const signinEmail = dispatch => input => {
    dispatch({ type: 'add_email', payload: input})
    navigate('PasswordSignin')
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
    navigate('GenderSignup')
}

const addGender = dispatch => input => {
    dispatch({ type: 'add_gender', payload: input})
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
    navigate('InterestedInGenderSignup')
}

// const addHowFar = dispatch => input => {
//     dispatch({ type: 'add_how_far', payload: input})
//     navigate('InterestedInSignup')
// }


const addInterestedInGender = dispatch => input => {
    dispatch({ type: 'add_interested_in_gender', payload: input})
    navigate('InterestedInAgeSignup')
}

const addInterestedInAge = dispatch => input => {
    dispatch({ type: 'add_interested_in_age', payload: input})
    navigate('InterestedInLocationSignup')
}

const addInterestedInLocation = dispatch => input => {
    dispatch({ type: 'add_interested_in_location', payload: input})
    navigate('InterestedInVeggieSignup')
}

// const addInterestedInVeggie = dispatch => input => {
//     dispatch({ type: 'add_interested_in_veggie', payload: input})
//     navigate('')
// }


 

export const { Provider, Context } = createDataContext(
    entryReducer, 
    { 
        signinEmail,
        addEmail,
        addPassword, 
        addFirstName, 
        addGender, 
        addBirthDate, 
        addVeggieType,
        addBio, 
        addProfileImgUrl,
        // addHowFar,
        addInterestedInGender,
        addInterestedInLocation,
        addInterestedInAge
        // addInterestedInVeggie,
        // addlocation
    },
    { 
        email:'', 
        password:'', 
        first_name: '',
        birth_date: '',
        veggie_type: '',
        bio: '',
        profile_img_url: '',
        // interested_in: '',
        // how_far: 0,
        gender:'',

        //THESE DEFAULT VALUES WILL NEED TO BE CHANGED FROM THIS:
        // interested_in_gender:'',
        // interested_in_veggie:'',
        // interested_in_location:'',
        // interested_in_age:'',
        // location:''
        //TO THIS:
        interested_in_gender:[],
        interested_in_veggie:[],
        interested_in_location:{},
        interested_in_age:{},
        location: {}
    }
)
