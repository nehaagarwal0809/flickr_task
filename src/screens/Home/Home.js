import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {styles} from './Home.styles';
import axios from 'axios';
import debounce from 'lodash.debounce';
import {
  API_KEY,
  base_url,
  condition_one,
  condition_two,
  coordinate,
} from '../../utils/ApiHelper';
import ImageCard from '../../components/ImageCard';

const Home = ({navigation}) => {
  const [queryText, setQueryText] = useState('');
  const [imageData, setImageData] = useState([]);

  function changeQueryText(text) {
    setQueryText(text);
    makeDebounceRequet(text);
  }

  function makeApiCall(txt) {
    const api_url =
      base_url +
      API_KEY +
      coordinate +
      condition_one +
      txt.trim() +
      condition_two;
    axios
      .get(api_url)
      .then(response => {
        if (response.data.stat === 'ok') {
          const data = response.data.photos.photo;
          setImageData([...data]);
        }
      })
      .catch(error => console.log('An error occured', error));
  }

  const makeDebounceRequet = useCallback(
    debounce(value => makeApiCall(value), 300),
    [],
  );

  function imageDetailScreen(item) {
    navigation.push('ImageDetail', item);
  }

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.searchBox}
        value={queryText}
        onChangeText={changeQueryText}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={imageData}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text>No Data Available</Text>}
        renderItem={({item}) => {
          return (
            <ImageCard
              onPress={() => {
                imageDetailScreen(item);
              }}
              image_url={item.url_m}
              title={item.title}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
