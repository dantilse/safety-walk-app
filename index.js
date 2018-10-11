/** @format */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import Header from './src/components/Header';
// import Body from './src/components/Body';
// import Footer from './src/components/Footer';
//
// const App = () => (
//   <View style={styles.appStyle}>
//     <Header />
//     <Body />
//     <Footer />
//   </View>
// );
//
// AppRegistry.registerComponent('SafetyWalk', () => App);
//
// const styles = {
//   appStyle: {
//     flexGrow: 1,
//     backgroundColor: '#fafafa'
//   }
// };
