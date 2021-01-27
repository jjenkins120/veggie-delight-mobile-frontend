import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { CheckBox } from 'react-native-elements';
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInGenderSignupScreen = () => {
    const [checked, setChecked] = useState(false)
    const { addInterestedInGender } = useContext(EntryContext)

    //need to define logic that will added with checked state equally true to compile their titles to an array and sent to the context to be stored in state

    return (
        <FormView>
            <CheckBox
                title='Male'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <CheckBox
                title='Female'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <CheckBox
                title='Trans Male'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <CheckBox
                title='Non-Binary'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checked}
                onPress={()=> setChecked(!checked)}
            />
            <Form 
                placeholder='Interested in Gender' 
                title='Continue' 
                onPress={addInterestedInGender}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInGenderSignupScreen