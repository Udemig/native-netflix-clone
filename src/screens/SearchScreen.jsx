import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppScreens} from '../navigation/types';
import {useState} from 'react';
const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 border border-neutral-500 rounded-full flex-row justify-between mb-3">
        <TextInput
          onChangeText={setSearchText}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className=" text-white tracking-wider font-semibold py-2 px-6"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AppScreens.Home)}
          className="bg-neutral-700 rounded-full p-2 m-1 items-center justify-center flex">
          <Icon name="close" color="#fff" size={25} />
        </TouchableOpacity>
      </View>

      {/*  veri bulunamadıysa ekrana bastırılacak  */}
      {/* <View className="items-center justify-center">
        <Image
          source={require('./../assets/images/movieTime.png')}
          className="w-96 h-96"
        />
      </View> */}
    </SafeAreaView>
  );
};

export default SearchScreen;
