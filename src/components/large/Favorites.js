import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FavoriteCard from '../medium/FavoriteCard';

export default class Favorites extends Component {
  render() {
    const { channels } = this.props;
    return (
      <View style={styles.favorites}>
        <Text style={styles.title}>FAVORITES</Text>
        {channels.map((channel, index) =>
          <FavoriteCard key={`FavoriteCard-${index}`} channel={channel} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  favorites: { height: 4 * 75, paddingLeft: 8 },
  title: {
    fontSize: 32,
    paddingBottom: 24,
    fontWeight: "200",
  }
});
