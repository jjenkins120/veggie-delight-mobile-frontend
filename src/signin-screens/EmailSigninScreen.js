import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const EmailSignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Email Sign In Screen</Text>
            <Button 
                title='Continue'
                onPress={() => navigation.navigate('PasswordSignin') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignInScreen