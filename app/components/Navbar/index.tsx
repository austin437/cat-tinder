import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MessageIcon, PawIcon, UserIcon } from '../Icons';

const ACTIVE_COLOR = '#EC537E';
const INACTIVE_COLOR = '#434141';

export type Screen = 'paw' | 'message' | 'user';

type Props = {
    id: string;
}

const Navbar = ({ id }: Props) => {
    const [activeScreen, setActiveScreen] = useState<Screen>('paw');

    const navigation = useNavigation();

    const handlePress = (screen: Screen) => {
        setActiveScreen(screen);

        switch (screen) {
            case 'message':
                // @ts-ignore
                navigation.navigate('Message', { id: id });
                break;
            case 'user':
                // @ts-ignore
                navigation.navigate('UserProfile', { id: id });
                break;
            case 'paw':
            default:
                // @ts-ignore
                navigation.navigate('Home');
                break;
        }

    };

    return <View style={[styles.root]}>
        <TouchableOpacity onPress={() => handlePress('paw')}>
            <PawIcon size={20} color={activeScreen === 'paw' ? ACTIVE_COLOR : INACTIVE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('message')}>
            <MessageIcon size={20} color={activeScreen === 'message' ? ACTIVE_COLOR : INACTIVE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('user')}>
            <UserIcon size={20} color={activeScreen === 'user' ? ACTIVE_COLOR : INACTIVE_COLOR} />
        </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 156,
        height: 44,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
    },
});

export default Navbar;
