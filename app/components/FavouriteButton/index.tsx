import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouriteButton = () => {
    return <View style={[styles.root]}>
        <Text>Favourite Button</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignSelf: 'flex-start',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 10,
    },
});

export default FavouriteButton;
