import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  NativeModules,
  LayoutAnimation,
} from 'react-native'
import { Button, Icon } from 'native-base';
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ActionButtons extends Component {
  state = {
    fontSizeIcon: 4 * 15,
  };

  render() {
    const { pausePlay, paused, seekableDuration } = this.props;
    const pausePlayIcon = paused ? 'play' : 'pausecircle';
    const animateIconPausePlay = () => {
      LayoutAnimation.spring();
      const fontSizeIcon = paused ? this.state.fontSizeIcon - 50 : this.state.fontSizeIcon + 50;
      this.setState({ fontSizeIcon });
    };

    return (
      <View style={styles.actionButtons}>
        <Icon style={styles.smallIcon} type="FontAwesome" name="random" />
        <Icon style={styles.mediumIcon} type="AntDesign" name="banckward" />
        <Button
          disabled={!!!seekableDuration}
          onPress={() => {
            animateIconPausePlay();
            pausePlay();
          }}
          style={styles.pausePlayButton}
          large
          transparent
        >
          <Icon
            style={{
              fontSize: this.state.fontSizeIcon,
              color: !!!seekableDuration ? 'gray' : 'black'
            }}
            type="AntDesign"
            name={pausePlayIcon}
          />
        </Button>

        <Icon style={styles.mediumIcon} type="AntDesign" name="forward" />
        <Icon style={styles.smallIcon} type="SimpleLineIcons" name="share-alt" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  actionButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mediumIcon: { fontSize: 4 * 5 },
  smallIcon: { fontSize: 4 * 3, color: "#e3e3e3" },
  pausePlayButton: { height: 4 * 45 },
  pausePlayButton: { height: 4 * 45 },
})
