import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Dropdown } from 'react-native-material-dropdown'
import AppButton from '../components/AppButton'
import { Context as EntryContext} from '../context/EntryContext'

const GenderSignupScreen = () => {
    const { addGender } = useContext(EntryContext)
    const [gender, setGender] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const data = [{
        value: 'Male'
        }, {
        value: 'Female'
        }
    ]

    return (
        <View>
            <NavigationEvents onWillFocus={() => setErrorMessage('')}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Dropdown
                label='Gender'
                data={data}
                onChangeText={()=> setGender(data.value)}
            />
            <AppButton
                title='Continue'
                onPress={gender ? () => addGender(gender) : () => setErrorMessage('Please select one')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default GenderSignupScreen