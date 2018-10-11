import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const readyState = 'ready';
const scanStarted = 'scanStarted';
const scanning = 'scanning';
const complete = 'complete';
const error = 'error';

const ButtonContainer = props => (
  <View style={styles.main}>
    {(() => {
      const expr = props.status;
      switch (expr) {
        case readyState:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(scanStarted)} title="Scan" />
            </View>
          );
        case scanStarted:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(readyState)} title="Cancel" />
              <Button onPress={() => props.statusChange(scanning)} title="Continue" />
            </View>
          );
        case scanning:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(complete)} title="Finish" />
              <Button onPress={() => props.statusChange(scanStarted)} title="Scan again" />
            </View>
          );
        case complete:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(readyState)} title="Done" />
            </View>
          );
        case 'error':
          return <Text>Error</Text>;
        default:
          return <Text>{props.status}</Text>;
      }
    })()}
  </View>
);

// App Status states
// - ready
// - scan started
// - scanning
// - scan complete
// - error

export default ButtonContainer;

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  main: {
    flexDirection: 'row'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
