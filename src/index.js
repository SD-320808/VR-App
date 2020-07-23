import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  ModeScreen,
  MerchantLoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  MerchantHomeScreen,
} from './screens';

const Router = createStackNavigator(
  {
    MerchantLoginScreen,
    ModeScreen,
    MerchantHomeScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: 'ModeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
