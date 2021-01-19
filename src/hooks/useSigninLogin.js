import { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'

export default () => {
    const { signin } = useContext(AuthContext)
    const { state: { email }, signinPassword } = useContext(EntryContext)


    const signinLogin = input => {
        signinPassword(input)
        //adds password with input to the initial entry state 
        signin(email, input)
        //produces token for user 
    }

    //MAY NEED TO PLACE SIGNINPASSWORD IN A USEEFFECT SOMEHOW

    return [signinLogin]

}

// I need signinPassword to run, update the context global state value and then retrieve that state value and provide that as an argument in the signin function