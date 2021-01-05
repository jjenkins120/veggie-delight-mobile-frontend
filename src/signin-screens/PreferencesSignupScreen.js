import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const PreferencesSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Preferences Sign up</Text>
            <Button 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PreferencesSignUpScreen