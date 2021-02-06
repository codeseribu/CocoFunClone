/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Video, Gallery, Live, Status} from '../../components/HomeMenu';

const Top = createMaterialTopTabNavigator();
import {
  Notification,
  Profile,
  Search,
  Upload,
} from '../../components/NavigatorMenu';
import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

const HeaderMenu = () => {
  return (
    <Top.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        style: {backgroundColor: '#fff', elevation: 0},
        indicatorStyle: {
          position: 'absolute',
          left: 30,
          height: 4,
          width: 26,
          backgroundColor: '#FFEE00',
          borderRadius: 3,
        },
        labelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}>
      <Top.Screen name="Popular" component={Home} />
      <Top.Screen name="Video" component={Video} />
      <Top.Screen name="Gallery" component={Gallery} />
      <Top.Screen name="Live" component={Live} />
      <Top.Screen name="Status" component={Status} />
    </Top.Navigator>
  );
};

const index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{showLabel: false, style: {height: 50}}}
        initialRouteName="home">
        <Tab.Screen
          name="Home"
          component={HeaderMenu}
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

export default index;
