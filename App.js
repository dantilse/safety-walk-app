/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// Components
import Body from './src/components/Body';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
// helpers
import colors from './src/styles/Colors';

const isFirstScan = index => index === 0;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleAppStatusChange = value => {
    const expr = value;
    switch (expr) {
      case 'ready':
        return this.setState(defaultState);
        break;
      case 'scanStarted':
        return this.setState({
          appStatus: value,
          scanCount: this.state.scanCount + 1
        });
        break;
      case 'scanning':
        // isFirstScan(this.state.scanCount)
        //   ? console.log('this IS the first scan')
        //   : console.log('this is not the first scan');

        // set loading state so a spinner shows where the button goes?
        // get the timestamp and location from the phone
        // get the tag information from the NFC tag
        // store this info in a unique scan area
        // reset the state for the next scan

        if (isFirstScan(this.state.scanCount)) {
          navigator.geolocation.getCurrentPosition(
            position => {
              this.setState({
                location: position.coords,
                timestamp: position.timestamp
              });
            },
            error => error.message,
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        }

        this.setState({
          appStatus: value,
          scans: [
            ...this.state.scans,
            {
              tagNumber: parseInt(Math.random() * 100000, 10),
              tagType: this.state.scanCount % 2 ? 'exterior' : 'interior'
            }
          ]
        });
        console.log(JSON.stringify(this.state));
        break;
      default:
        return this.setState({ appStatus: value });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body count={this.state.scanCount} status={this.state.appStatus} scans={this.state.scan} />
        <Text>{JSON.stringify(this.state)}</Text>
        <Footer
          status={this.state.appStatus}
          statusChange={this.handleAppStatusChange.bind(this)}
        />
      </View>
    );
  }
}

// set default state here to make reverting back easier
const defaultState = {
  appStatus: 'ready',
  location: {},
  scanCount: 0,
  scans: [],
  timestamp: 0
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
