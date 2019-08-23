import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Icon, Left, Right, Button } from 'native-base';
import { connect } from 'react-redux'

class HeaderPlayer extends Component {
  render() {
    return (
      <Header
        style={{
          borderBottomColor: 'white',
          backgroundColor: 'white',
        }}
      >
        <Left>
          <Button
            onPress={() => this.props.navigation.pop()}
            transparent
          >
            <Icon
              style={{ color: "#ddd" }}
              name="ios-arrow-down"
            />
          </Button>
        </Left>
        <Right>
          <Icon
            style={{ color: "#ddd" }}
            type="MaterialIcons"
            name="queue-music"
          />
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => ({
  ...state.navigation,
});

export default connect(mapStateToProps)(HeaderPlayer);
