import React from 'react';

import MessageSvg from '@app/assets/icons/message.svg';

const MessageIcon = ({ color, size }: Icon) => (
    <MessageSvg stroke={color} width={size} height={size} />
);


export default MessageIcon;
