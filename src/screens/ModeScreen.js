import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const ModeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Select Type</Header>

    <Button mode="contained" onPress={() => navigation.navigate('MerchantHomeScreen')}>
      MERCHANT
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      CUSTOMER
    </Button>
  </Background>
);

export default memo(ModeScreen);
