import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const LoadScreen = () => {
    return (
        <View>
            <Text>Load Screen</Text>
            <Button>Create Account</Button>
            <Button>Sign In</Button>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LoadScreen