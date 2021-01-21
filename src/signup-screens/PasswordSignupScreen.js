import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import FormPassword from '../components/FormPassword'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const PasswordSignUpScreen = () => {
    const { addPassword } = useContext(EntryContext)

    return (
        <FormView>
            <FormPassword 
                placeholder='Password'
                secondPlaceholder='Confirm Password'
                title='Continue'
                onPress={addPassword}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
    
})

export default PasswordSignUpScreen