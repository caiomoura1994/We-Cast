import React, { Component } from 'react'
import { Text, View } from 'native-base';
import { Image } from 'react-native';
import TitleAndSubtitle from '../small/TitleAndSubtitle';

export default class FavoriteCard extends Component {
  render() {
    const { title, description, image } = this.props.channel;
    const height = 1 * image[0].height[0];
    const width = 1 * image[0].width[0];
    const uri = image[0].url[0];

    return (
      <View style={{
        backgroundColor: 'white',
        width: 4 * 45,
        borderRadius: 8,
        flex: .9
      }}
      >
        <Image
          style={{ height, width }}
          borderRadius={4}
          source={{ uri }}
        />
        <TitleAndSubtitle
          styleProps={{ marginTop: 4 * 3 }}
          size="medium"
          title={title[0]}
          subtitle={description[0]}
        />
      </View>
    )
  }
}
