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
// import LoadingScreen from './src/signup-screens/LoadingScreen'
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
    Load: {
      screen: LoadScreen,
      navigationOptions: {
        title: 'Back'
      }
    },
    // Signin: SigninScreen,
    // GoogleSignin: GoogleSigninScreen,
    EmailSignin: {
      screen: EmailSigninScreen,
      navigationOptions: { 
        title: null,
        headerBackTitle: 'Back',
        headerTransparent: true
      }
    },
    PasswordSignin: {
      screen: PasswordSigninScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Email',
        headerTransparent: true
      }
    },  
    EmailSignup: {
      screen: EmailSignupScreen,
      navigationOptions: {
        title: null,
        headerBackTitle: 'Back',
        headerTransparent: true
      }
    },  
    PasswordSignup: {
      screen: PasswordSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Email',
        headerTransparent: true
      }
    },  
    FirstNameSignup: {
      screen: FirstNameSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Password',
        headerTransparent: true
      }
    },  
    BirthDateSignup: {
      screen: BirthDateSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'First Name',
        headerTransparent: true
      }
    },  
    ProfileImgUrlSignup: {
      screen: ProfileImgUrlSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Birth Date',
        headerTransparent: true
      }
    },  
    VeggieTypeSignup: {
      screen: VeggieTypeSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Profile Image',
        headerTransparent: true
      }
    },  
    BioSignup: {
      screen: BioSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Veggie Type',
        headerTransparent: true
      }
    },  
    HowFarSignup: {
      screen: HowFarSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'Bio',
        headerTransparent: true
      }
    }, 
    InterestedInSignup: {
      screen: InterestedInSignupScreen,
      navigationOptions: {
        title: null, 
        headerBackTitle: 'How Far',
        headerTransparent: true
      }
    }, 
    // Loading: LoadingScreen
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

