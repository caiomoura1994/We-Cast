import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'

export default class ProgressBar extends Component {
  handlePercente(currentTime, seekableDuration) {
    const loadedPercente = (100 * currentTime) / seekableDuration;
    const loadedNotPercente = 100 - loadedPercente;
    return { loadedPercente, loadedNotPercente };
  }

  handleTimeToHours(time) {
    const m = Math.floor(time % 3600 / 60);
    const s = Math.floor(time % 3600 % 60);
    const mDisplay = m > 0 ? m : '00';
    const sDisplay = s > 0 ? s : '00';
    return `${mDisplay}:${sDisplay}`;
  }

  render() {
    const { currentTime, seekableDuration } = this.props;
    const { loadedPercente, loadedNotPercente } = this.handlePercente(currentTime, seekableDuration);

    return (
      <View style={{ flex: 0.3, paddingTop: 4 * 12 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: 1, width: `${loadedPercente}%`, backgroundColor: 'black' }} />
          <View style={{ height: 1, width: `${loadedNotPercente}%`, backgroundColor: '#e3e3e3' }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#e3e3e3' }}> {this.handleTimeToHours(currentTime)} </Text>
          <Text style={{ color: '#e3e3e3' }}> {this.handleTimeToHours(seekableDuration)} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
