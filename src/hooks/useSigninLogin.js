import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'


export default () => {
    const { state: { email }} = useContext(EntryContext)
    const { signin } = useContext(AuthContext)

    const signinLogin = input => {
        signin(email, input)
    }

    return [signinLogin]

}
