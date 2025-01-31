import CatProfile from '@app/components/CatProfile';
import React, { useEffect } from 'react';
import {useFetchCats} from '@app/hooks';

const LikeableCats = () => {
    const { cats } = useFetchCats();

    useEffect(() => console.log('likable cats', cats), [cats]);

    return <CatProfile />;
};

export default LikeableCats;
