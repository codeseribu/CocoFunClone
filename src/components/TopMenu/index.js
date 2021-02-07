/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Videos, Gallery, Live, Status} from '../../components/HomeMenu';

import Home from '../../screens/Home';

const Top = createMaterialTopTabNavigator();

const TopMenu = (props) => {
  return (
    <Top.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        style: {
          backgroundColor: '#fff',
          elevation: 1,
        },
        indicatorStyle: {
          position: 'absolute',
          left: 28,
          height: 4,
          width: 26,
          backgroundColor: '#FFEE00',
          borderRadius: 3,
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: props.active ? 'bold' : 'normal',
          textTransform: 'capitalize',
        },
      }}>
      <Top.Screen name="Popular" component={Home} active />
      <Top.Screen name="Video" component={Videos} />
      <Top.Screen name="Gallery" component={Gallery} />
      <Top.Screen name="Live" component={Live} />
      <Top.Screen name="Status" component={Status} />
    </Top.Navigator>
  );
};

export default TopMenu;
