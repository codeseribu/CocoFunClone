/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Video = () => {
  return (
    <View style={styles.container}>
      <Text>Video Page</Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DDEDA',
  },
});
