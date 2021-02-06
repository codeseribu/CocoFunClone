/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import Router from './router';

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Router />
      </View>
    </>
  );
};

export default App;
