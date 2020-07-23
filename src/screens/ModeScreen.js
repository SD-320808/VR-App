import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const ModeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Select the type</Header>

    {/* <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph> */}
    <Button mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
      Customer
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('MerchantHomeScreen')}
    >
      Moderator
    </Button>
  </Background>
);

export default memo(ModeScreen);