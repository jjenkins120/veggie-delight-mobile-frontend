import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const AccountScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Account Screen</Text>
            <Button
                title='Sign out'
                onPress={()=> navigation.navigate('Load')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen