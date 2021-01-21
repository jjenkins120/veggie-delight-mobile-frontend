import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const ProfileImgUrlSignupScreen = () => {
    const { addProfileImgUrl } = useContext(EntryContext)

    return (
        <FormView>
            <Form 
                placeholder='Profile Img Url'
                title='Continue'
                onPress={addProfileImgUrl}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default ProfileImgUrlSignupScreen