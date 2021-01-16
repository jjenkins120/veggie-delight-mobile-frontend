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
import HowFarSignupScreen from './src/signin-screens/HowFarSignupScreen'
import InterestedInSignupScreen from './src/signin-screens/InterestedInSignupScreen'
import LoadScreen from './src/signin-screens/LoadScreen'
import PasswordSigninScreen from './src/signin-screens/PasswordSigninScreen'
import PasswordSignupScreen from './src/signin-screens/PasswordSignupScreen'
import PreferencesSignupScreen from './src/signin-screens/PreferencesSignupScreen'
import ProfileImageSignupScreen from './src/signin-screens/ProfileImageSignupScreen'
import ResolveAuthScreen from './src/signin-screens/ResolveAuthScreen'
import SigninScreen from './src/signin-screens/SigninScreen'
import VeggieTypeSignupScreen from './src/signin-screens/VeggieTypeSignupScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen, 
  //because resolveauth is listed at the top, it will run as the default route unless an initial default is specified
  loadFlow: createStackNavigator({
    Load: LoadScreen,
    Signin: SigninScreen,
    GoogleSignin: GoogleSigninScreen,
    EmailSignin: EmailSigninScreen, 
    PasswordSignin: PasswordSigninScreen,
    EmailSignup: EmailSignupScreen, 
    PasswordSignup: PasswordSignupScreen, 
    ProfileImageSignup: ProfileImageSignupScreen,
    VeggieTypeSignup: VeggieTypeSignupScreen, 
    BioSignup: BioSignupScreen,
    HowFarSignup: HowFarSignupScreen,
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
    <AuthProvider>
      <App/>
    </AuthProvider> 
  )
}