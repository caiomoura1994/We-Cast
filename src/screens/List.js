import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { parserStringToxml } from '../../utils';
import HeaderSearchBar from '../components/large/HeaderSearchBar';
import Footer from '../components/large/Footer';
import Favorites from '../components/large/Favorites';
import TheHot from '../components/large/TheHot';
import { registerNavigation } from '../redux/actions';

class List extends Component {
  state = {
    channels: [],
    channelSelected: [],
  };

  getPodcastmrg = () => {
    fetch('http://feeds.feedburner.com/podcastmrg')
      .then(success => {
        parserStringToxml(success._bodyText)
          .then(channels => this.setState({ channels, channelSelected: channels[0].item }))
          .catch(err => console.log(err));
      })
      .catch(err => { console.log(err) });
  };

  componentWillMount() {
    this.getPodcastmrg();
    this.props.registerNavigation(this.props.navigation);
  }

  render() {
    return (
      <Container>
        <HeaderSearchBar />
        <Content>
          <Favorites channels={this.state.channels} />
          <TheHot
            channelSelected={this.state.channelSelected}
          />
        </Content>
        <Footer />
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  registerNavigation: (navigation) => dispatch(registerNavigation(navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
