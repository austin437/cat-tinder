import React from 'react';

import CloseSvg from '@app/assets/icons/close.svg';

const CloseIcon = ({ color, size }: Icon) => (
    <CloseSvg color={color} width={size} height={size} />
);


export default CloseIcon;
