import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'


export default () => {
    const { signin } = useContext(AuthContext)
    const { state , addInterestedIn } = useContext(EntryContext)
    const { addNewUser } = useContext(UserContext)

    const signupLogin = async (input) => {

        const stateObj = {...state, interested_in: input}

        addInterestedIn(input)
        //pull interested in from the form input and attach to state
        await addNewUser(stateObj)
        //send a post request to the backend with all state user attributes
        signin(state.email, state.password)
        //get a token for the new user and navigate them to the home screen
    }

    return [signupLogin]
}

//MAY NEED TO COMBINE ADDNEWUSER AND SIGNIN FUNCTIONS INTO A NEW FUNCTION