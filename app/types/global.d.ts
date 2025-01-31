
import { IconType } from '@app/types/Icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export { };

declare global {
    type Icon = IconType;
    type StackNavigationProp = NativeStackNavigationProp<any>;
}
