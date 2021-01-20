import { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'

export default () => {
    const { state: { id } } = useContext(AuthContext)
    const { fetchUserData } = useContext(UserContext)

    const callFetch = () => {
        fetchUserData(id)
    }

    return [callFetch]

}