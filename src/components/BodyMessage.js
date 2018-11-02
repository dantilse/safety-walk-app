import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BodyMessage = props => (
  <View style={styles.bodyStyle}>
    <Text style={styles.textStyle}>Image goes here</Text>
  </View>
);

export default BodyMessage;

const styles = {
  bodyStyle: {
    justifyContent: 'center',
    flexGrow: 1,
    height: 80,
    marginTop: 'auto'
  },
  textStyle: {
    textAlign: 'center'
  }
};
