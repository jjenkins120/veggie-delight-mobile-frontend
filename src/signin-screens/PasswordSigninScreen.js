import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const PasswordSignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Password Sign In Screen</Text>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen