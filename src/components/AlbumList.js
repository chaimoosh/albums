import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default AlbumList;
