import CatDescription from '@app/components/CatDescription';
import DislikeButton from '@app/components/DislikeButton';
import FavouriteButton from '@app/components/FavouriteButton';
import LikeButton from '@app/components/LikeButton';
import Navbar from '@app/components/Navbar';
import SlideOutView from '@app/components/SlideOutView';
import usePostVotes, { Payload } from '@app/hooks/usePostVotes';
import { DefaultTheme } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

type Props = {
    cat: Cat;
    like: () => void,
    dislike: () => void,
}

const width = Dimensions.get('window').width;
const ACTIVATION_POINT = width / 1.8;


const CatProfile = ({ cat, like, dislike }: Props) => {
    const { postVote } = usePostVotes();
    const [direction, setDirection] = useState<null | 'left' | 'right'>(null);
    const isActive = useSharedValue(false);
    const position = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        backgroundColor: isActive.value === false ? 'transparent' : DefaultTheme.colors.background,
    }));

    const onAnimationEnd = useCallback(() => {
        if (direction === 'left') {
            dislike();
        } else if (direction === 'right') {
            like();
        }
    }, [direction, dislike, like]);

    useEffect(() => {
        if (cat) {
            setTimeout(() => {
                setDirection(null);
            }, 250);
        }
    }, [cat]);

    if (!cat) {
        return null;
    }

    const WINDOW_WIDTH = width - 40;
    const IMAGE_WIDTH = cat.width;
    const IMAGE_HEIGHT = cat.height;
    const RATIO = IMAGE_WIDTH / IMAGE_HEIGHT;
    const { name, affection_level, origin } = cat.breeds[0];
    const likePayload: Payload = {
        image_id: cat.id,
        sub_id: 'my-user-sub',
        value: 1,
    };

    const handleLike = async () => {
        setDirection('right');
        await postVote(likePayload);
    };

    const handleDislike = async () => {
        setDirection('left');
    };

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            isActive.value = true;
            position.value = e.translationX;
        })
        .onEnd(async (e) => {
            isActive.value = false;
            let isRight: true | false = e.translationX > 0;

            if (isRight) {
                if (e.translationX >= ACTIVATION_POINT) {
                    position.value = width + 100;
                    handleLike();
                    like();
                } else {
                    position.value = 0;
                }
            } else {
                if (e.translationX <= ACTIVATION_POINT * -1) {
                    position.value = (width + 100) * -1;
                    handleDislike();
                    dislike();
                } else {
                    position.value = 0;
                }
            }
        })
        .runOnJS(true);

    return <Animated.View style={[styles.root, animatedStyle]}>
        <SlideOutView direction={direction} onAnimationEnd={onAnimationEnd}>
            <GestureDetector gesture={panGesture}>
                <View style={[styles.root]}>
                    <View style={[styles.favouriteButtonContainer]}>
                        <FavouriteButton />
                    </View>
                    <View style={[styles.imageContainer]}>
                        <Image
                            style={[styles.image, { width: WINDOW_WIDTH, height: WINDOW_WIDTH * RATIO }]}
                            source={{
                                uri: cat.url,
                            }}
                            resizeMode="cover"
                        />
                        <View style={[styles.catDescriptionContainer]}>
                            <CatDescription name={name} affectionLevel={affection_level} country={origin} />
                        </View>
                    </View>
                    <View style={[styles.buttonContainer]}>
                        <DislikeButton onPress={handleDislike} />
                        <LikeButton onPress={handleLike} />
                    </View>
                    <View style={[styles.navBarContainer]}>
                        <Navbar id={cat.id} />
                    </View>
                </View>
            </GestureDetector>
        </SlideOutView>
    </Animated.View>;
};

const styles = StyleSheet.create({
    root: {
        // backgroundColor: DefaultTheme.colors.background,
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

    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginBottom: 30,
    },
});

export default CatProfile;
