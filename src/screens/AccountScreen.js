import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import { Context as AuthContext} from '../context/AuthContext'
import { Context as UserContext} from '../context/UserContext'

const AccountScreen = () => {
    const { state: { user } } = useContext(UserContext)
    const { signout } = useContext(AuthContext)

    return (
        <View>
            <Text>{user.email}</Text>
            <Text>{user.first_name}</Text>
            <Text>{user.veggie_type}</Text>
            <Text>{user.birth_date}</Text>
            <Text>{user.bio}</Text>
            <Text>{user.profile_img_url}</Text>
            <Text>{user.interested_in}</Text>
            <Text>{user.how_far}</Text>
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