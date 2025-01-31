import DislikeButton from '@app/components/DislikeButton';
import FavouriteButton from '@app/components/FavouriteButton';
import LikeButton from '@app/components/LikeButton';
import Navbar from '@app/components/Navbar';
import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

type Props = {
    cat: Cat;
}

const CatProfile = ({ cat }: Props) => {
    const WINDOW_WIDTH = Dimensions.get('window').width - 40;
    const IMAGE_WIDTH = cat?.width;
    const IMAGE_HEIGHT = cat?.height;
    const RATIO = IMAGE_WIDTH / IMAGE_HEIGHT;

    console.log(cat);
    return <View style={[styles.root]}>
        <View style={[styles.favouriteButtonContainer]}>
            <FavouriteButton />
        </View>
        <View style={[styles.imageContainer]}>
            <Image
                style={[styles.image, { width: WINDOW_WIDTH, height: WINDOW_WIDTH * RATIO }]}
                source={{
                    uri: cat?.url,
                }}
                resizeMode="cover"
            />
        </View>
        <View style={[styles.buttonContainer]}>
            <DislikeButton />
            <LikeButton />
        </View>
        <View style={[styles.navBarContainer]}>
            <Navbar />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        padding: 0,
    },
    favouriteButtonContainer: {
        marginVertical: 10,
    },
    imageContainer: {
        height: 446,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: 50, height: 50,
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
    }
});

export default CatProfile;
