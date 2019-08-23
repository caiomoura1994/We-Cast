import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  FooterTab,
  Footer as FooterNB,
  Button,
  Icon,
  Text
} from 'native-base';

const styles = StyleSheet.create({
  boolet: {
    fontSize: 18,
  },
  footer: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
});

export default class Footer extends Component {
  render() {
    return (
      <FooterNB style={styles.footer}>
        <FooterTab>
          <Button vertical>
            <Icon type="AntDesign" name="home" />
            <Text style={styles.boolet}>•</Text>
          </Button>
          <Button vertical>
            <Icon type="SimpleLineIcons" name="disc" />
            <Text />
          </Button>
          <Button vertical>
            <Icon type="MaterialIcons" name="person-outline" />
            <Text />
          </Button>
        </FooterTab>
      </FooterNB>
    )
  }
}

