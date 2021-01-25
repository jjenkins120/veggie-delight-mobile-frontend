import { useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'


export default () => {
    const { state } = useContext(EntryContext)
    const { addNewUser } = useContext(UserContext)
    const { signin } = useContext(AuthContext)

    const signupLogin = input => {
        const stateObj = {...state, interested_in: input}
        addNewUser(signin, state.email, state.password, stateObj)
    }

    return [signupLogin]
}
