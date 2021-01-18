import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'


export default () => {
    const { signin } = useContext(AuthContext)
    const { state , addInterestedIn } = useContext(EntryContext)
    const { addNewUser } = useContext(UserContext)

    const signupLogin = async (input) => {
        addInterestedIn(input)
        //pull interested in from the form input and attach to state
        console.log(state)
        await addNewUser(state)
        //send a post request to the backend with all state user attributes
        signin(state.email, state.password)
        //get a token for the new user and navigate them to the home screen
    }

    //MAY NEED TO PLACE ADDINTERESTEDIN IN A USEEFFECT SOMEHOW

    return [signupLogin]
}