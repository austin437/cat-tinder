import CatProfile from '@app/components/CatProfile';
import { CatContext } from '@app/contexts/CatContext';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LikeableCats = () => {
    const { cats } = useContext(CatContext);
    const [page, setPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(0);
    const PAGE_SIZE = 20;

    const currentCats = useMemo(() => {
        const start = (page * PAGE_SIZE) - offset;
        const end = start + PAGE_SIZE;
        return cats.slice(start, end);
    }, [cats, offset, page]);

    const like = () => {
        setOffset((val) => val + 1);
    };

    const dislike = () => {
        setOffset((val) => val + 1);
    };

    const onCurrentCatsEmpty = useCallback(() => {
        if (cats.length > 0 && currentCats.length === 0) {
            setPage(val => val + 1);
        }
    }, [cats.length, currentCats.length]);

    useEffect(() => {
        onCurrentCatsEmpty();
    }, [onCurrentCatsEmpty]);

    if (cats.length === 0) {
        return <View style={[styles.activityIndicatorContainer]}>
            <ActivityIndicator size={'large'} />
        </View>;
    }

    return <View style={[styles.root]}>
        {
            currentCats.map((val) => {
                return <View key={val.id} style={[styles.cardContainer]}>
                    <CatProfile cat={val} like={like} dislike={dislike} />
                </View>;
            })
        }
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
