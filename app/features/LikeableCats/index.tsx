import CatProfile from '@app/components/CatProfile';
import React, { useEffect } from 'react';
import {useFetchCats} from '@app/hooks';

const LikeableCats = () => {
    const { cats } = useFetchCats();

    useEffect(() => console.log('likable cats', JSON.stringify(cats[0])), [cats]);

    return <CatProfile cat={cats[0]}/>;
};

export default LikeableCats;
