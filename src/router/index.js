/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BottomNavigator from '../navigations/BottomNavigator';

const Router = () => {
  return (
    <View style={{flex: 1}}>
      <BottomNavigator />
    </View>
  );
};

export default Router;
