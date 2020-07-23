import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
     <BackButton goBack={() => navigation.navigate('modescreen')} />
    <Logo />
    <Header>Login</Header>

    {/* <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph> */}
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
