import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// helpers
import colors from './Colors';

const BodyNotice = props => (
  <View style={styles.bodyStyle}>
    <Text style={styles.textStyle}>
      {props.count > 0 ? `${props.count} successful scans` : 'Ready to scan'}
    </Text>
  </View>
);

export default BodyNotice;

const styles = {
  bodyStyle: {
    // alignItems: 'center',
    justifyContent: 'center',
    // flexGrow: 1,
    height: 80,
    marginTop: 'auto',
    backgroundColor: colors.white
  },
  textStyle: {
    textAlign: 'center'
  }
};
