import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FavouriteButton from '@app/components/FavouriteButton';
import DislikeButton from '@app/components/DislikeButton';
import LikeButton from '@app/components/LikeButton';
import Navbar from '@app/components/Navbar';

type Props = {
    cat: Cat;
}

const CatProfile = ({cat}: Props) => {
    console.log(cat);
    return <View style={[styles.root]}>
        <Text>Cat Profile</Text>
        <FavouriteButton />
        <DislikeButton />
        <LikeButton />
        <Navbar />
    </View>;
};

const styles = StyleSheet.create({
    root: {
        padding: 0,
    },
});

export default CatProfile;
