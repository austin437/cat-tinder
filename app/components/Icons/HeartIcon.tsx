import React from 'react';

import HeartSvg from '@app/assets/icons/heart.svg';

const HeartIcon = ({ color, size }: Icon) => (
    <HeartSvg color={color} width={size} height={size} />
);


export default HeartIcon;
