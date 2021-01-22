import { useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'
import { navigate } from '../navigationRef'


export default () => {
    const { state } = useContext(EntryContext)
    const { addNewUser } = useContext(UserContext)
    const { signin } = useContext(AuthContext)


    const signupLogin = input => {

        const stateObj = {...state, interested_in: input}
        // addInterestedIn(input)
        //pull interested in from the form input and attach to state
        addNewUser(signin, state.email, state.password, stateObj)
        //send a post request to the backend with all state user attributes
        // navigate('Loading')
        // setTimeout(() => signin(state.email, state.password), 500)
        //get a token for the new user and navigate them to the home screen
        
    }

    return [signupLogin]
}

//MAY NEED TO COMBINE ADDNEWUSER AND SIGNIN FUNCTIONS INTO A NEW FUNCTION