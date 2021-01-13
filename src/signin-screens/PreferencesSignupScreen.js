import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const PreferencesSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Preferences Sign up</Text>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PreferencesSignUpScreen