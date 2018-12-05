import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

const ShopThumbnail = ({name, image, goTo, index}) => {
  return (
    <TouchableHighlight onPress={() => goTo(index)}>
      <View>
        <Image style={{width: 100, height: 100}} source={{uri: image}}/>
        <Text>{name}</Text>
      </View>
      </TouchableHighlight>
  );
}

export default ShopThumbnail;