import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const InterestedInSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Interested In Sign Up Screen</Text>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('PreferencesSignup')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen