import { FireIcon, StarIcon } from '@app/components/Icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const FavouriteButton = () => {
    return <View style={[styles.root]}>
        <View style={[styles.fireIconContainer]}>
            <FireIcon size={16} color={'#FD267D'} />
        </View>
        <View style={[styles.starIconContainer]}>
            <StarIcon size={16} color={'#BFBFC0'} />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        height: 28,
        width: 84,
        backgroundColor: '#E3E3E4',
        borderRadius: 25,
    },
    fireIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 40,
        height: 24,
        borderRadius: 25,
    },
    starIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 24,
    },
});

export default FavouriteButton;
