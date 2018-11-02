/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FooterBar = () => (
  <View style={styles.footerStyles}>
    <Text style={styles.textStyle}>This is the footer bar, empty for now</Text>
  </View>
);

export default FooterBar;

const styles = {
  footerStyles: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    textAlign: 'center',
    backgroundColor: '#f1f3f5',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6'
  },
  textStyle: {
    fontSize: 16,
    color: '#495057'
  }
};
