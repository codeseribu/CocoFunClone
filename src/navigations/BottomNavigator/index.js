/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TopMenu from '../../components/TopMenu';

import {
  Notification,
  Profile,
  Search,
  Upload,
} from '../../components/NavigatorMenu';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{showLabel: false, style: {height: 50}}}
        initialRouteName="home">
        <Tab.Screen
          name="Home"
          component={TopMenu}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../../assets/icons/home.png')}
                style={{height: 22, resizeMode: 'contain'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../../assets/icons/search.png')}
                style={{height: 22, resizeMode: 'contain'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../../assets/icons/add-button.png')}
                style={{height: 42, resizeMode: 'contain'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../../assets/icons/notification.png')}
                style={{height: 22, resizeMode: 'contain'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Profile}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{height: 22, resizeMode: 'contain'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
