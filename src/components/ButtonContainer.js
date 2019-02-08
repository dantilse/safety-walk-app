import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// helpers
import button from '../styles/Buttons';

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
              <TouchableOpacity onPress={() => props.statusChange(scanning)} style={styles.button}>
                <Text style={styles.buttonText}>Scan now</Text>
              </TouchableOpacity>
            </View>
          );
        case scanning:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(readyState)} title="Cancel" />
              <Button onPress={() => props.statusChange(scanStarted)} title="Continue" />
            </View>
          );
        case scanStarted:
          return (
            <View style={styles.layout}>
              <Button onPress={() => props.statusChange(complete)} title="Finish" />
              <Button onPress={() => props.statusChange(scanning)} title="Scan again" />
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
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  button: {
    ...button.base,
    ...button.primary
  },
  buttonText: {
    ...button.textBase,
    ...button.textPrimary
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  main: {
    height: 80,
    marginTop: 'auto'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
