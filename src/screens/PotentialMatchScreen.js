import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as UserContext } from '../context/UserContext'
import { Context as AuthContext } from '../context/AuthContext'

const PotentialMatchScreen = () => {
    const { state : { user }, fetchUserData } = useContext(UserContext)
    const { state: { id } } = useContext(AuthContext)

    useEffect(() => fetchUserData(id), [])

    return (
        <View>
            <Text>Potential Match Screen</Text>
            <Text>{user.first_name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PotentialMatchScreen