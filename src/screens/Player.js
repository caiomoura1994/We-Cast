import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Video from 'react-native-video';
import { Container, Content, Footer } from 'native-base';
import HeaderPlayer from '../components/large/HeaderPlayer';
import MusicDetail from '../components/large/MusicDetail';
import ProgressBar from '../components/large/ProgressBar';
import ActionButtons from '../components/large/ActionButtons';
import { DownloadFileButton } from '../components/small/DownloadFileButton';

export default class Player extends Component {
  state = {
    paused: false,
    total: 0,
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0
  };

  render() {
    const handleProgress = (progress) => {
      const { playableDuration, seekableDuration, currentTime } = progress;
      this.setState({ seekableDuration, playableDuration, currentTime });
    }
    const { currentTime, seekableDuration, paused } = this.state;
    const pausePlay = () => this.setState({ paused: !paused });
    const { uri, subtitle, title, enclosure } = this.props.navigation.state.params;
    return (
      <Container style={{ marginLeft: 8, marginRight: 8 }}>
        <Video
          source={{
            uri: enclosure[0].$.url
          }}
          paused={paused}
          onProgress={handleProgress}
          onBuffer={this.onBuffer}
        />
        <HeaderPlayer />
        <Content style={
          {
            paddingLeft: 4 * 6,
            paddingRight: 4 * 6,
          }
        }>
          <MusicDetail subtitle={subtitle} title={title} uri={uri} />
          {/* <DownloadFileButton /> */}
          <ProgressBar currentTime={currentTime} seekableDuration={seekableDuration} />
          <ActionButtons seekableDuration={seekableDuration} pausePlay={pausePlay} paused={paused} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
