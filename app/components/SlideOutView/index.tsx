import React from 'react';
import { PropsWithChildren, useEffect } from 'react';
import { ViewStyle, useAnimatedValue, Animated, Easing } from 'react-native';

type SlideOutViewProps = PropsWithChildren<{ direction: null | 'left' | 'right', onAnimationEnd: Function, style?: ViewStyle }>;

const SlideOutView: React.FC<SlideOutViewProps> = ({ direction, onAnimationEnd, style, children }) => {
  const animated = useAnimatedValue(0);

  useEffect(() => {
    if (direction) {
      Animated.timing(animated, {
        toValue: direction === 'left' ? -500 : 500,
        duration: 250,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start(() => onAnimationEnd());
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [animated, direction, onAnimationEnd]);

  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        padding: 20,
        ...style,
        transform: [{ translateX: animated }],
      }}>
      {children}
    </Animated.View>
  );
};

export default SlideOutView;
