import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import { Input, Text } from 'react-native-elements'
import FormView from '../components/FormView'
import AppButton from '../components/AppButton'
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInLocationSignupScreen = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [radius, setRadius] = useState('')
    const { addInterestedInLocation } = useContext(EntryContext)

    return (
        <FormView>
            <Input
                placeholder='Latitude'
                value={latitude}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={setLatitude}
            />
            <Input
                placeholder='Longitude'
                value={longitude}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={setLongitude}
            />
            <Input
                placeholder='Radius'
                value={radius}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={setRadius}
            />
            <AppButton
                title='Continue'
                onPress={() => addInterestedInLocation({latitude: parseInt(latitude), longitude: parseInt(longitude), radius: parseInt(radius)})}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInLocationSignupScreen