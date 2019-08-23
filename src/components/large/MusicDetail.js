import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import TitleAndSubtitle from '../small/TitleAndSubtitle';

export default class MusicDetail extends Component {
  render() {
    const { uri, subtitle, title } = this.props;

    return (
      <View style={{
        flex: 0.4,
        backgroundColor: 'white',
        alignItems: "center",
        paddingTop: 50
      }}
      >
        <Image
          style={{ height: 250, width: 250 }}
          borderRadius={4}
          source={{ uri }}
        />
        <TitleAndSubtitle
          size="large"
          title={title[0]}
          subtitle={subtitle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
