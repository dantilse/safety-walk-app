/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Header</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: '#fafafa'
  },
  textStyle: {
    fontSize: 20
  }
});
