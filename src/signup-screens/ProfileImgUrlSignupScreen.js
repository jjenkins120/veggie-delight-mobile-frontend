import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const ProfileImgUrlSignupScreen = () => {
    const { addProfileImgUrl } = useContext(UserContext)

    return (
        <FormView>
            <Text>Profile Img Sign up</Text>
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