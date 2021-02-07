/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserImage from '../../assets/images/user-post.png';

import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.userPostStyle}>
            <View style={styles.userPost}>
              <View>
                <Image
                  source={UserImage}
                  style={{width: 33, height: 33, borderRadius: 16}}
                />
              </View>
              <Text style={styles.userName}>Code1000</Text>
              <View
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  bottom: 0,
                }}>
                <Ionicons name="close" size={20} color="#CACDD2" />
              </View>
            </View>
            <View style={styles.description}>
              <Text style={{marginBottom: 8}}>Musik viral</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#1BCB82',
                  marginBottom: 14,
                }}>
                #VideoMusik
              </Text>
            </View>
          </View>
          <View style={styles.videoContainer}>
            <VideoPlayer
              disableBack
              disableFullscreen
              disableVolume
              source={require('../../assets/Videos/video.mp4')} // Callback when video cannot be loaded
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              resizeMode={'cover'}
              autoplay={true}
              repeat={true}
            />
          </View>
        </View>
        <View>
          <View style={styles.userPostStyle}>
            <View style={styles.userPost}>
              <View>
                <Image
                  source={UserImage}
                  style={{width: 33, height: 33, borderRadius: 16}}
                />
              </View>
              <Text style={styles.userName}>Code1000</Text>
              <View
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  bottom: 0,
                }}>
                <Ionicons name="close" size={20} color="#CACDD2" />
              </View>
            </View>
            <View style={styles.description}>
              <Text style={{marginBottom: 8}}>Musik viral</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#1BCB82',
                  marginBottom: 14,
                }}>
                #VideoMusik
              </Text>
            </View>
          </View>
          <View style={styles.videoContainer}>
            <VideoPlayer
              disableBack
              disableFullscreen
              disableVolume
              source={require('../../assets/Videos/video-1.mp4')} // Callback when video cannot be loaded
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              resizeMode={'contain'}
              autoplay={true}
              repeat={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userPostStyle: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 16,
  },
  userPost: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {fontSize: 13, fontWeight: 'bold', color: 'black', marginLeft: 10},
  description: {
    marginTop: 13,
  },
  videoContainer: {
    width: '100%',
    height: 250,
  },
});
