import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DislikeButton = () => {
    return <View style={[styles.root]}>
        <Text>X</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignSelf: 'flex-start',
        padding: 5,
        margin: 10,
        backgroundColor: 'red',
        borderRadius: '50%',
        width: 30,
        height: 30,
    },
});

export default DislikeButton;
