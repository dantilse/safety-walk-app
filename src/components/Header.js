/** @format */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// components
// helpers
import colors from '../styles/Colors';

const Header = () => (
  <View style={styles.viewStyle}>
    <Image source={require('../images/headshot.png')} style={styles.image} />
    <Text style={styles.textStyle}>Header</Text>
    {console.log(colors.gray[0], typeof colors.gray[0])}
  </View>
);

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 30,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    backgroundColor: colors.gray[1],
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[3]
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
