import { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return null 
}
//THE ENTIRE POINT of this component is to check to see if there is an auth token for the user BEFORE anything else loads. Conversely, we could simply title this component loadScreen and create a loading animation to run briefly while react checks to see if there is an auth token

export default ResolveAuthScreen