import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Google Sign In Screen</Text>
            <Button
                title='Sign In'
                onPress={() => navigation.navigate('tabFlow') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen