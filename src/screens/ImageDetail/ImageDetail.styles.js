import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: widthPercentageToDP(10),
  },
  bigImage: {
    width: '100%',
    height: heightPercentageToDP(55),
    borderRadius: 20,
    marginVertical: heightPercentageToDP(3),
  },
  imgTitle: {
    color: 'tomato',
    fontSize: heightPercentageToDP(4),
    textAlign: 'center',
    marginVertical: heightPercentageToDP(1.5),
  },
  desc: {
    textAlign: 'left',
    color: '#121212',
    fontSize: heightPercentageToDP(2),
  },
});
