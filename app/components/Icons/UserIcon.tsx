import React from 'react';

import UserSvg from '@app/assets/icons/user.svg';

const UserIcon = ({ color, size }: Icon) => (
    <UserSvg stroke={color} width={size} height={size} />
);


export default UserIcon;
