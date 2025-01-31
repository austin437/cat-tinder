import React from 'react';

import StarSvg from '@app/assets/icons/star.svg';

const StarIcon = ({ color, size }: { color: string, size: number }) => (
    <StarSvg color={color} width={size} height={size} />
);


export default StarIcon;
