import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const BioSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bio Sign Up Screen</Text>
            <Button 
                title='Continue'
                onPress={()=> navigation.navigate('InterestedInSignup')}
            />

        </View>
    )
}

const styles = StyleSheet.create({

})

export default BioSignUpScreen