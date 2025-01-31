import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type Props = {
    name?: string;
    affectionLevel?: number,
    country?: string,
}

const CatDescription = ({ name, affectionLevel, country }: Props) => {
    const WINDOW_WIDTH = Dimensions.get('window').width;

    return <View style={[styles.root, { width: WINDOW_WIDTH - 60 }]}>
        <View style={[styles.row]}>
            <Text style={[styles.name]}>{name}</Text>
            <Text style={[styles.affectionLevel]}>{affectionLevel}</Text>
        </View>
        <Text style={[styles.country]}>{country}</Text>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: 'white',
        width: '80%',
        height: 48,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: { fontWeight: '700', lineHeight: 20, fontSize: 16 },
    affectionLevel: { lineHeight: 20, fontSize: 16 },
    country: { fontWeight: '700', lineHeight: 10, fontSize: 8 },
});

export default CatDescription;
