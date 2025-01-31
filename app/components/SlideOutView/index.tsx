import React from 'react';
import { PropsWithChildren, useEffect } from 'react';
import { ViewStyle, useAnimatedValue, Animated } from 'react-native';

type SlideOutViewProps = PropsWithChildren<{direction: null | 'left' | 'right', style?: ViewStyle}>;

const SlideOutView: React.FC<SlideOutViewProps> = ({direction, style, children}) => {
  const animated = useAnimatedValue(0);

  useEffect(() => {
    if(direction) {
      Animated.timing(animated, {
        toValue: direction === 'left' ? -500 : 500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [animated, direction]);

  return (
    <Animated.View
      style={{
        ...style,
        transform: [{translateX: animated}],
      }}>
      {children}
    </Animated.View>
  );
};

export default SlideOutView;
