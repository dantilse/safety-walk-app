import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BodyMessage = props => (
  <View style={styles.bodyStyle}>
    {(() => {
      const expr = props.status;
      switch (expr) {
        case 'ready':
          return (
            <View style={styles.layout}>
              <Text>Ready state image</Text>
              <Image source={require('../images/headshot.png')} style={styles.image} />
            </View>
          );
        case 'scanStarted':
          return (
            <View style={styles.layout}>
              <Text>Scan started state image</Text>
              <Image source={require('../images/headshot.png')} style={styles.image} />
            </View>
          );
        case 'scanning':
          return (
            <View style={styles.layout}>
              <Text>Scanning state image</Text>
              <Image source={require('../images/headshot.png')} style={styles.imageScanning} />
            </View>
          );
        case 'complete':
          return (
            <View style={styles.layout}>
              <Text>{`${props.count} successful scans`}</Text>
              <Image source={require('../images/headshot.png')} style={styles.image} />
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

export default BodyMessage;

const styles = {
  bodyStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    height: 80,
    marginTop: 'auto'
  },
  image: {
    width: 40,
    height: 40
  },
  imageScanning: {
    width: 40,
    height: 40,
    transform: [{ scale: 1.1 }]
  },
  layout: {
    alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center'
  }
};
