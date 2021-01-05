import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const PasswordSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Password Sign Up Screen</Text>
            <Button 
                title='Continue'
                onPress={ () => navigation.navigate('BioSignup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignUpScreen