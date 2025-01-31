import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LikeButton = () => {
    return <View style={[styles.root]}>
        <Text>H</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignSelf: 'flex-start',
        padding: 5,
        margin: 10,
        backgroundColor: 'green',
        borderRadius: '50%',
        width: 30,
        height: 30,
    },
});

export default LikeButton;
