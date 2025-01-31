import LikeableCats from '@app/features/LikeableCats';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <SafeAreaView style={[styles.root]}>
    <LikeableCats />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default HomeScreen;
