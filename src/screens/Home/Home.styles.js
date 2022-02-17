import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: widthPercentageToDP(4),
  },
  searchBox: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    height: heightPercentageToDP(5),
    marginVertical: heightPercentageToDP(3),
  },
});
