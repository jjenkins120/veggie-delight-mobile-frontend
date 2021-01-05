import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const EmailSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Email Sign up Screen</Text>
            <Button 
                title='Continue'
                onPress={()=> navigation.navigate('PasswordSignup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignUpScreen