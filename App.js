import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs'
import { setNavigator } from './src/navigationRef'
import AccountScreen from './src/screens/AccountScreen'
import MessageScreen from './src/screens/MessageScreen'
import PotentialMatchScreen from './src/screens/PotentialMatchScreen'
import EmailSigninScreen from './src/signin-screens/EmailSigninScreen'
import GoogleSigninScreen from './src/signin-screens/GoogleSigninScreen'
import PasswordSigninScreen from './src/signin-screens/PasswordSigninScreen'
import SigninScreen from './src/signin-screens/SigninScreen'
import BioSignupScreen from './src/signup-screens/BioSignupScreen'
import BirthDateSignupScreen from './src/signup-screens/BirthDateSignupScreen'
import EmailSignupScreen from './src/signup-screens/EmailSignupScreen'
import FirstNameSignupScreen from './src/signup-screens/FirstNameSignupScreen'
import HowFarSignupScreen from './src/signup-screens/HowFarSignupScreen'
import InterestedInSignupScreen from './src/signup-screens/InterestedInSignupScreen'
import LoadScreen from './src/screens/LoadScreen'
import PasswordSignupScreen from './src/signup-screens/PasswordSignupScreen'
import ProfileImgUrlSignupScreen from './src/signup-screens/ProfileImgUrlSignupScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import VeggieTypeSignupScreen from './src/signup-screens/VeggieTypeSignupScreen'
import LoadingScreen from './src/signup-screens/LoadingScreen'
import { Provider as EntryProvider } from './src/context/EntryContext'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as UserProvider } from './src/context/UserContext'

const SafeAreaMaterialTopTabBar = ({ ...props }) => (
  <SafeAreaView 
    style={styles.safeAreaView}
    // forceInset={{ top: 'always', horizontal: 'never', bottom: 'never' }}
  >
    <MaterialTopTabBar 
      {...props} 
      activeTintColor='green'
      indicatorStyle={{ backgroundColor: 'red' }}
      style={styles.tabBar}
      inactiveTintColor='purple'
    />
  </SafeAreaView>
);

const options = {
  tabBarComponent: props => (<SafeAreaMaterialTopTabBar {...props} />),
};

const tabFlow = createMaterialTopTabNavigator(
  {
    PotentialMatch: {
      screen: PotentialMatchScreen,
      navigationOptions: {
        title: 'Matches',
        swipeEnabled: false
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        title: 'Messages',
        swipeEnabled: false
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
        swipeEnabled: false
      }
    },
  }, options
)


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen, 
  //because resolveauth is listed at the top, it will run as the default route unless an initial default is specified
  loadFlow: createStackNavigator({
    Load: LoadScreen,
    Signin: SigninScreen,
    GoogleSignin: GoogleSigninScreen,
    EmailSignin: EmailSigninScreen, 
    PasswordSignin: PasswordSigninScreen,
    EmailSignup: EmailSignupScreen, 
    PasswordSignup: PasswordSignupScreen, 
    FirstNameSignup: FirstNameSignupScreen,
    BirthDateSignup: BirthDateSignupScreen,
    ProfileImgUrlSignup: ProfileImgUrlSignupScreen,
    VeggieTypeSignup: VeggieTypeSignupScreen, 
    BioSignup: BioSignupScreen,
    HowFarSignup: HowFarSignupScreen,
    InterestedInSignup: InterestedInSignupScreen,
    Loading: LoadingScreen
  }), 

  tabFlow
  
})

const App = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 45
  },
  tabBar: {
    backgroundColor: 'yellow'
  }
})


export default () => {
  return (
    <AuthProvider>
      <EntryProvider>
        <UserProvider>
          <App ref={(navigator) => setNavigator(navigator)}/>
        </UserProvider>
      </EntryProvider>
    </AuthProvider> 
  )
}

