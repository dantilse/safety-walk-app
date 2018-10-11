/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => (
  <View style={styles.footerStyles}>
    <Text style={styles.textStyle}>Footer text</Text>
  </View>
);

export default Footer;

const styles = {
  footerStyles: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#e6e6e6'
  },
  textStyle: {
    fontSize: 20
  }
};
