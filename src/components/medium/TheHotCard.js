import React, { Component } from 'react'
import {
  Text,
  Button,
  View
} from 'native-base';
import { Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import TitleAndSubtitle from '../small/TitleAndSubtitle';
import { connect } from 'react-redux'

class TheHotCard extends Component {

  render() {
    const { index, music } = this.props;
    const reactImage = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
    const uri = music['itunes:image'] ? music['itunes:image'][0].$.href : reactImage;
    const subtitle = music.description[0].replace('<p>', '').replace('</p>', '');
    const { title, enclosure } = music;

    const openPlayerScreen = () => this.props.navigation.navigate('Player', {
      title,
      uri,
      subtitle,
      enclosure
    });
    if (title[0].search(this.props.textTheHot) == -1) return <View />;
    return (
      <TouchableWithoutFeedback onPress={openPlayerScreen}>
        <View style={styles.theHotCard}>
          <View style={{ flex: 0.18 }}>
            <Image
              style={styles.image}
              borderRadius={4}
              source={{ uri }}
            />
          </View>
          <TitleAndSubtitle
            styleProps={{ flex: 0.60 }}
            title={title[0]}
            subtitle={subtitle}
            size="small"
          />
          <View style={{ flex: 0.18 }}>
            <Button large style={{ backgroundColor: 'white' }}>
              <Text style={styles.number}> {index} </Text>
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  theHotCard: {
    height: 70,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    height: 52,
    marginRight: 12
  },
  number: {
    fontWeight: '300',
    fontSize: 40,
    color: 'black'
  },
});
const mapStateToProps = (state) => ({
  ...state.navigation,
  ...state.textTheHot
});

export default connect(mapStateToProps)(TheHotCard)
