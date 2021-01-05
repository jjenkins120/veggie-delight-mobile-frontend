import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Signup Screen</Text>
            <Button 
                title='Sign in with Google'
                onPress={() => navigation.navigate('GoogleSignin')}
            />
            <Button 
                title='Sign in with email'
                onPress={() => navigation.navigate('EmailSignin')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen