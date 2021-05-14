import React from 'react';
import {
  View
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 30,
        "height": 30,
        "backgroundColor": "#000000"
      }
    }
    />
    </View>

  );
};