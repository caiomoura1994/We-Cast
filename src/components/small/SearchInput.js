import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchTheHot } from '../../redux/actions';

const styles = StyleSheet.create({
  textInputStyles: {
    height: 28,
    borderColor: 'white',
    backgroundColor: '#eff3fa',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',    
  }
})
export class SearchInput extends Component {
  static propTypes = {
    textTheHot: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
  }

  render() {
    return (
      <TextInput
        style={styles.textInputStyles}
        placeholder="Search"
        inlineImageLeft="ion-ios-search"
        onChangeText={this.props.onChangeText}
        value={this.props.textTheHot}
      />
    )
  }
}

const mapStateToProps = (state) => ({ ...state.textTheHot });

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (text) => dispatch(searchTheHot(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)


