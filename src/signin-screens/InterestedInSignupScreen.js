import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const InterestedInSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Interested In Sign Up Screen</Text>
            <Button 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen