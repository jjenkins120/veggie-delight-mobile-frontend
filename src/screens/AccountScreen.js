import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import { Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <View>
            <Text>Account Screen</Text>
            <AppButton
                title='Sign out'
                onPress={signout}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen