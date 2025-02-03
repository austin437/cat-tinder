import LikeableCats from '@app/features/LikeableCats';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return <SafeAreaView style={[styles.root]}>
    <View style={[styles.container]}>
      <LikeableCats />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {

  },
});

export default HomeScreen;
