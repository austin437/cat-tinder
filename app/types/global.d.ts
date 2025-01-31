
import { IconType } from '@app/types/Icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Cat as CatType } from '@app/types/Cat';

export { };

declare global {
    type Icon = IconType;
    type StackNavigationProp = NativeStackNavigationProp<any>;
    type Cat = CatType;
}
