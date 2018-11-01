/** @format */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => (
  <View style={styles.viewStyle}>
    <Image source={require('../images/headshot.png')} style={styles.image} />
    <Text style={styles.textStyle}>Header</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    elevation: 2,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // height: 60,
    padding: 15,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: '#fafafa'
  },
  textStyle: {
    fontSize: 20
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 'auto'
  }
});
