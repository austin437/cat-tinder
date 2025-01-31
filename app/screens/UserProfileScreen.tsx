import { StackParamList } from '@app/navigators/HomeStackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props extends NativeStackScreenProps<StackParamList, 'UserProfile'> {

}

const UserProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;
  return <SafeAreaView style={[styles.root]}>
    <View style={[styles.container]}>
      <Text>User Profile Screen</Text>
      <Text>ID: {id}</Text>
      <Button title={'Go back'} onPress={() => navigation.navigate('Home')} />
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

export default UserProfileScreen;
