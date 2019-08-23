import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

class TitleAndSubtitle extends React.Component {
  static defaultProps = {
    title: '',
    subtitle: '',
    size: 'small',
    styleProps: { alignItems: "center", marginTop: 4 * 3 },
    numberOfLinesTitle: 2,
    numberOfLinesSubtitle: 1
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    numberOfLinesTitle: PropTypes.number,
    numberOfLinesSubtitle: PropTypes.number,
    styleProps: PropTypes.object,
  }

  render() {
    const {
      title,
      subtitle,
      size,
      numberOfLinesTitle,
      numberOfLinesSubtitle,
      styleProps
    } = this.props;

    return (
      <View style={styleProps}>
        <Text
          numberOfLines={numberOfLinesTitle}
          ellipsizeMode="tail"
          style={styles[size]}
        >
          {title}
        </Text>
        <Text
          numberOfLines={numberOfLinesSubtitle}
          ellipsizeMode="tail"
          style={styles.subtitle}
          note
        >
          {subtitle}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  small: {
    // fontSize: 32,
    // fontWeight: "200",
  },
  medium: {
    // fontSize: 32,
    // fontWeight: "200",
  },
  large: {
    fontSize: 32,
    fontWeight: "200",
  },
  subtitle: {
    fontSize: 12,
    paddingTop: 4,
    color: '#e3e3e3'
  }
})

export default TitleAndSubtitle;
