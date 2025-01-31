import CatProfile from '@app/components/CatProfile';
import { CatContext } from '@app/contexts/CatContext';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

const LikeableCats = () => {
    const { cats, setCats } = useContext(CatContext);

    const goToNextCat = () => {
        const updatedCats = cats.slice(1);
        setCats(updatedCats);
    };

    return <View style={[styles.root]}>
        <CatProfile cat={cats[0]} goToNextCat={goToNextCat} />
    </View>;
};

const styles = StyleSheet.create({
    root: {
        height: '100%',
    },
});

export default LikeableCats;
