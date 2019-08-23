import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TheHotCard from '../medium/TheHotCard';

export default class TheHot extends Component {
  render() {
    const { channelSelected } = this.props;
    return (
      <View style={styles.theHot}>
        <Text style={styles.title}>THE HOT</Text>
        {
          channelSelected.map((music, index) =>
            <TheHotCard
              key={`TheHotCard-${index}`}
              music={music}
              index={index + 1}
            />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  theHot: {
    paddingLeft: 8
  },
  title: {
    fontSize: 32,
    fontWeight: "200",
    paddingBottom: 32
  }
})