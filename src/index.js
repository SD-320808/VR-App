import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  ModeScreen,
  MerchantLoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  MerchantHomeScreen,
  HomeScreen,
  LoginScreen,
  Verification
} from './screens';

const Router = createStackNavigator(
  {
    MerchantLoginScreen,
    ModeScreen,
    MerchantHomeScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    HomeScreen,
    LoginScreen,
    Verification
  },
  {
    initialRouteName: 'ModeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
