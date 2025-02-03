import { HeartIcon } from '@app/components/Icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
    onPress: GestureEvent;
}

const LikeButton = ({ onPress }: Props) => {
    return <TouchableOpacity onPress={onPress}>
        <View style={[styles.root]}>
            <HeartIcon size={32} color={'#6BD88E'} />
        </View>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: '50%',
        width: 54,
        height: 54,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
    },
});

export default LikeButton;
