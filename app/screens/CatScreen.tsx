import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeartIcon, CloseIcon, FireIcon, StarIcon} from '@app/components/Icons';

const CatScreen = () => {
  return <View style={[styles.container]}>
    <Text>Heart</Text>
    <HeartIcon color={'#6BD88E'} />
    <Text>Close</Text>
    <CloseIcon color={'#E16359'} />
    <Text>Fire</Text>
    <FireIcon color={'#FD267D'} size={25} />
    <Text>Star</Text>
    <StarIcon color={'#FD267D'} size={36} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CatScreen;
