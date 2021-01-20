import { useContext } from 'react'
import { Context as AuthContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'

export default () => {
    const { fetchUserData } = useContext(UserContext)
    const { state } = useContext(AuthContext)

    const callFetch = () => {
        console.log(state.id)
        fetchUserData(state.id)
    }

    

    return [callFetch]

}