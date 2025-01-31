import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    cat: Cat;
}

const CatProfile = ({cat}: Props) => {
    console.log(cat);
    return <View style={[styles.root]}>
        <Text>Cat Profile</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        padding: 20,
    },
});

export default CatProfile;
