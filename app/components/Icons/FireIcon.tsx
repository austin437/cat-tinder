import React from 'react';

import FireSvg from '@app/assets/icons/fire.svg';

const FireIcon = ({ color, size }: { color: string, size: number }) => (
    <FireSvg color={color} width={size} height={size} />
);


export default FireIcon;
