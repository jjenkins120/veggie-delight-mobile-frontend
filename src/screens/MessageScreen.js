import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import MatchListContainer from '../containers/MatchListContainer'
import MessagesContainer from '../containers/MessagesContainer'

const MessageScreen = () => {
    return (
        <View>
            <MatchListContainer/>
            <MessagesContainer/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MessageScreen