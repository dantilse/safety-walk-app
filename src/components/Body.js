import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
// components
import BodyNotice from './BodyNotice';
import BodyMessage from './BodyMessage';

const Body = props => (
  <View style={styles.bodyStyle}>
    <BodyMessage />
    <BodyNotice count={props.count} {...props} />
  </View>
);

// App Status states
// - ready
// - scan started
// - scanning
// - scan complete
// - error

export default Body;

const styles = {
  bodyStyle: {
    justifyContent: 'center',
    flexGrow: 1
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  }
};
