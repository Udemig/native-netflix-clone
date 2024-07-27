import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
export default function BackAndFavorite({isAbsolute}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className={`flex-row justify-between items-center mx-4 z-20 ${
        isAbsolute && 'absolute w-[360px]'
      }`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-[#eab308] p-1 rounded-xl">
        <Icon name="chevron-left" color="#fff" size={30} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color="#fff" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
