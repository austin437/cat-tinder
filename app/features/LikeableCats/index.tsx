import CatProfile from '@app/components/CatProfile';
import { CatContext } from '@app/contexts/CatContext';
import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LikeableCats = () => {
    const { cats, setCats } = useContext(CatContext);

    const like = () => {
        const updatedCats = cats.slice(1);
        setCats(updatedCats);
    };

    const dislike = () => {
        const updatedCats = cats.slice(1);
        setCats(updatedCats);
    };

    if (cats.length === 0) {
        return <View style={[styles.activityIndicatorContainer]}>
            <ActivityIndicator size={'large'} />
        </View>;
    }

    return <View style={[styles.root]}>
        <View style={[styles.cardContainer]}>
            <CatProfile cat={cats[1]} like={like} dislike={dislike} />
        </View>
        <CatProfile cat={cats[0]} like={like} dislike={dislike} />
    </View>;
};

const styles = StyleSheet.create({
    root: {
        height: '100%',
    },
    cardContainer: {
        position: 'absolute',
    },
    activityIndicatorContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LikeableCats;
