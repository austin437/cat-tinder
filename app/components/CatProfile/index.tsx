import CatDescription from '@app/components/CatDescription';
import DislikeButton from '@app/components/DislikeButton';
import FavouriteButton from '@app/components/FavouriteButton';
import LikeButton from '@app/components/LikeButton';
import Navbar from '@app/components/Navbar';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native';

type Props = {
    cat: Cat;
}

const CatProfile = ({ cat }: Props) => {
    if (!cat) {
        return <ActivityIndicator size={'large'} />;
    }

    const WINDOW_WIDTH = Dimensions.get('window').width - 40;
    const IMAGE_WIDTH = cat.width;
    const IMAGE_HEIGHT = cat.height;
    const RATIO = IMAGE_WIDTH / IMAGE_HEIGHT;
    const { name, affection_level, origin } = cat.breeds[0];

    return <View style={[styles.root]}>
        <View style={[styles.favouriteButtonContainer]}>
            <FavouriteButton />
        </View>
        <View style={[styles.imageContainer]}>
            <Image
                style={[styles.image, { width: WINDOW_WIDTH, height: WINDOW_WIDTH * RATIO }]}
                source={{
                    uri: cat.url,
                }}
                resizeMode="contain"
            />
            <View style={[styles.catDescriptionContainer]}>
                <CatDescription name={name} affectionLevel={affection_level} country={origin} />
            </View>
        </View>
        <View style={[styles.buttonContainer]}>
            <DislikeButton onPress={() => console.log('dislike!')} />
            <LikeButton onPress={() => console.log('like!')} />
        </View>
        <View style={[styles.navBarContainer]}>
            <Navbar id={cat.id} />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        padding: 0,
    },
    favouriteButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    imageContainer: {
        backgroundColor: '#ddd',
        height: 446,
        width: '100%',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    image: {
        width: 50, height: 50,
    },
    catDescriptionContainer: {
        position: 'absolute',
        bottom: -10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
});

export default CatProfile;
