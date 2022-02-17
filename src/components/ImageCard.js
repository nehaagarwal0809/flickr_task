import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const ImageCard = ({image_url, title, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.cardStyle} onPress={onPress}>
        <View>
          <Text style={styles.imgTitle}>{title}</Text>
          <Image style={styles.imageStyle} source={{uri: image_url}} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyle: {marginVertical: heightPercentageToDP(2)},

  imgTitle: {
    color: '#000',
    marginBottom: heightPercentageToDP(2),
    fontWeight: 'bold',
    fontSize: heightPercentageToDP(2.1),
    textAlign: 'center',
  },
  imageStyle: {
    height: heightPercentageToDP('25%'),
    width: '100%',
  },
});

export default ImageCard;
