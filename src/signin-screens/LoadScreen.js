import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'


const LoadScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Load Screen</Text>
            <Button 
                title='Create Account'
                onPress={ () => navigation.navigate('EmailSignup')}/>
            <Button 
                title='Sign In'
                onPress={() => navigation.navigate('Signin') } 
            />
        </View>
    )
}

LoadScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    }
})

export default LoadScreen