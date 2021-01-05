import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import MatchList from '../components/MatchList'
import Messages from '../components/Messages'

const MessageScreen = () => {
    return (
        <View>
            <Text>Message Screen</Text>
            <MatchList/>
            <Messages/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MessageScreen