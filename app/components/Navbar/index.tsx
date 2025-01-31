import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
    return <View style={[styles.root]}>
        <Text>P</Text>
        <Text>C</Text>
        <Text>U</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 10,
        backgroundColor: 'blue',
        borderRadius: 25,
        width: 100,
        height: 30,
    },
});

export default Navbar;
