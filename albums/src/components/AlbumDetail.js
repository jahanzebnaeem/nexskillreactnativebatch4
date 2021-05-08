import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image} = album;
  const {
    headerContentStyle,
    headerStyle,
    thumbnailConainerStyle,
    thumbnailStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailConainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailConainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default AlbumDetail;
