import { CloseIcon } from '@app/components/Icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
    onPress: GestureEvent;
}

const DislikeButton = ({ onPress }: Props) => {
    return <TouchableOpacity onPress={onPress}>
        <View style={[styles.root]}>
            <CloseIcon size={32} color={'#E16359'} />
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
        shadowColor: '#ddd',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
    },
});

export default DislikeButton;
