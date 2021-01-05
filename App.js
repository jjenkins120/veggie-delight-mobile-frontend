import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/screens/AccountScreen'
import MessageScreen from './src/screens/MessageScreen'
import PotentialMatchScreen from './src/screens/PotentialMatchScreen'
import BioSignupScreen from './src/signin-screens/BioSignupScreen'
import EmailSigninScreen from './src/signin-screens/EmailSigninScreen'
import EmailSignupScreen from './src/signin-screens/EmailSignupScreen'
import GoogleSigninScreen from './src/signin-screens/GoogleSigninScreen'
import InterestedInSignupScreen from './src/signin-screens/InterestedInSignupScreen'
import LoadScreen from './src/signin-screens/LoadScreen'
import PasswordSigninScreen from './src/signin-screens/PasswordSigninScreen'
import PasswordSignupScreen from './src/signin-screens/PasswordSignupScreen'
import PreferencesSignupScreen from './src/signin-screens/PreferencesSignupScreen'
import SigninScreen from './src/signin-screens/SigninScreen'

const switchNavigator = createSwitchNavigator  ({

  loadFlow: createStackNavigator({
    Load: LoadScreen,
    Signin: SigninScreen,
    GoogleSignin: GoogleSigninScreen,
    EmailSignin: EmailSigninScreen, 
    PasswordSignin: PasswordSigninScreen,
    EmailSignup: EmailSignupScreen, 
    PasswordSignup: PasswordSignupScreen, 
    BioSignup: BioSignupScreen, 
    InterestedInSignup: InterestedInSignupScreen, 
    PreferencesSignup: PreferencesSignupScreen
  }), 
  tabFlow: createMaterialTopTabNavigator({
    PotentialMatch: PotentialMatchScreen,
    Account: AccountScreen,
    Message: MessageScreen
  })

})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App/>
  )
}