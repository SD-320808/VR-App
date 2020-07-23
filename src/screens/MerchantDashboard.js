import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { View } from 'react-native';
import CameraPage from '../utils/camera.page';

const MerchantDashboard = ({ navigation }) => (
  <View style={{flex:1}}><CameraPage/></View>
);

export default memo(MerchantDashboard);