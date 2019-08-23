import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SearchInput from '../small/SearchInput';

export default class HeaderSearchBar extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 40,
          marginBottom: 16,
          marginLeft: 8,
          marginRight: 8,
          height: 30
        }}
      >
        <SearchInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
