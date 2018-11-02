/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterBar from './FooterBar';
import ButtonContainer from './ButtonContainer';

const Footer = props => (
  <View style={styles.footerStyles}>
    <ButtonContainer status={props.status} statusChange={props.statusChange} {...this.props} />
    <FooterBar />
  </View>
);

export default Footer;

const styles = {
  footerStyles: {
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  }
};
