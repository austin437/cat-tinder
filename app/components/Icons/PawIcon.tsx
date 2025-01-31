import React from 'react';

import PawSvg from '@app/assets/icons/paw.svg';

const PawIcon = ({ color, size }: Icon) => (
    <PawSvg fill={color} width={size} height={size}/>
);

export default PawIcon;
