import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp>();

  return <SafeAreaView style={[styles.root]}>
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      <Button title={'Go to Messages'} onPress={() => navigation.navigate('Message', {
        id: 86,
      })} />
      <Button title={'Go to User Profile'} onPress={() => navigation.navigate('UserProfile', {
        id: 112,
      })} />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
});

export default HomeScreen;
