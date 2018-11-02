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
import colors from './src/components/Colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      appStatus: 'ready',
      scanCount: 0
    };
  }

  handleAppStatusChange = value => {
    const expr = value;
    switch (expr) {
      case 'ready':
        return this.setState({ appStatus: value, scanCount: 0 });
        break;
      case 'scanStarted':
        return this.setState({ appStatus: value });
        break;
      case 'scanning':
        return this.setState({ appStatus: value, scanCount: this.state.scanCount + 1 });
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
        <Body count={this.state.scanCount} />
        <Footer
          status={this.state.appStatus}
          statusChange={this.handleAppStatusChange.bind(this)}
        />
      </View>
    );
  }
}

// <Text style={styles.welcome}>Welcome to React Native!</Text>
// <Text style={styles.instructions}>To get started, edit App.js</Text>
// <Text style={styles.instructions}>{instructions}</Text>

// const styles = {
//   appStyle: {
//     flexGrow: 1,
//     backgroundColor: '#fafafa'
//   }
// };

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
