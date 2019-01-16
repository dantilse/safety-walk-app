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
        console.log(this.state);
        return this.setState({
          appStatus: value,
          scanCount: this.state.scanCount + 1
        });
        break;
      case 'scanning':
        return this.setState({
          appStatus: value,
          scan: {
            companyId: 'Company name',
            tag: [
              ...this.state.scan.tag,
              {
                tagNumber: parseInt(Math.random() * 100000, 10),
                tagLocation: this.state.scanCount % 2 ? 'front' : 'rear',
                tagType: this.state.scanCount % 2 ? 'exterior' : 'interior'
              }
            ],
            vehicleId: 354,
            vehicleType: 'truck'
          }
        });
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
        <Body count={this.state.scanCount} status={this.state.appStatus} />
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
  scanCount: 0,
  scan: {
    companyId: '',
    tag: [],
    vehicleId: '',
    vehicleType: ''
  }
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
