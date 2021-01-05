import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const PasswordSignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Password Sign In Screen</Text>
            <Button 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen