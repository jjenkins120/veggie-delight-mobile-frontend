import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { CheckBox } from 'react-native-elements';
import { Context as EntryContext } from '../context/EntryContext'

const VeggieTypeSignupScreen = () => {
    const [checked, setChecked] = useState(false)
    const { addVeggieType } = useContext(EntryContext)

    return (
        <FormView>
            <CheckBox
                title='Lacto-ovo'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <CheckBox
                title='Vegan'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <CheckBox
                title='Pescatarian'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <Form
                placeholder='What is your veggie type?'
                title='Continue'
                onPress={addVeggieType}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default VeggieTypeSignupScreen