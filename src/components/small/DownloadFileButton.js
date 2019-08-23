import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base';

export default class DownloadFileButton extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Button
          style={{
            marginTop: 16,
            backgroundColor: 'black',
          }}
          vertical>
          <Icon
            type="AntDesign"
            name="download"
          />
        </Button>
      </View>
    )
  }
}
