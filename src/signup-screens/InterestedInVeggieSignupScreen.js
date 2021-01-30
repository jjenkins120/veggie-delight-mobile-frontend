import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { CheckBox } from 'react-native-elements';
import CheckBoxList from '../components/CheckBoxList'
import useSignupLogin from '../hooks/useSignupLogin'

const InterestedInVeggieSignupScreen = () => {
    // const [checked, setChecked] = useState(false)
    const [signupLogin] = useSignupLogin()
    const veggieArray = ['Lacto-Ovo', 'Vegatarian', 'Vegan', 'Pescatarian']
    //need to define logic that will added with checked state equally true to compile their titles to an array and add to state

    return (
        <CheckBoxList
            title='Login'
            inputArray={veggieArray}
            onPress={signupLogin}
        />
    )
}

//     return (
//         <FormView>
//             <CheckBox
//                 title='Lacto-ovo'
//                 checkedIcon='dot-circle-o'
//                 uncheckedIcon='circle-o'
//                 checked={checked}
//                 onPress={()=> setChecked(!checked)}
//             />
//             <CheckBox
//                 title='Vegan'
//                 checkedIcon='dot-circle-o'
//                 uncheckedIcon='circle-o'
//                 checked={checked}
//                 onPress={()=> setChecked(!checked)}
//             />
//             <CheckBox
//                 title='Pescatarian'
//                 checkedIcon='dot-circle-o'
//                 uncheckedIcon='circle-o'
//                 checked={checked}
//                 onPress={()=> setChecked(!checked)}
//             />
//             <Form 
//                 placeholder='Interested In Veggie?'
//                 title='Continue'
//                 onPress={signupLogin}    
//             />
//         </FormView>
//     )
// }

const styles = StyleSheet.create({

})

export default InterestedInVeggieSignupScreen