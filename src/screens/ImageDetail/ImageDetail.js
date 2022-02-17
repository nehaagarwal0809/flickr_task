import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './ImageDetail.styles';

const ImageDetail = ({navigation, route}) => {
  const RESULT = route.params;
  const {title, url_m, description} = RESULT;
  const {_content} = description;

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.imgTitle}>{title}</Text>

      <Image source={{uri: url_m}} style={styles.bigImage} />
      <Text style={styles.desc}>{_content}</Text>
    </ScrollView>
  );
};

export default ImageDetail;
