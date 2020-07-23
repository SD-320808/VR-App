import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import BackButton from '../components/BackButton';
const MerchantHomeScreen = ({ navigation }) => (
  <Background>
      <BackButton goBack={() => navigation.navigate('ModeScreen')} />
    <Logo />
    <Header>Login </Header>

    <Button mode="contained" onPress={() => navigation.navigate('MerchantLoginScreen')}>
      Login
    </Button>
  </Background>
);

export default memo(MerchantHomeScreen);
