import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentDidMount() {
    // console.log('componentDidMount was executed');
    axios
      .get('http://localhost/reactnativeapi/music_albums.json')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
