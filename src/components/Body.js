import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import ButtonContainer from './ButtonContainer';

const Body = props => (
  <View style={styles.bodyStyle}>
    <ButtonContainer status={props.status} statusChange={props.statusChange} {...this.props} />
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
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};
