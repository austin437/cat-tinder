import CatProfile from '@app/components/CatProfile';
import { CatContext } from '@app/contexts/CatContext';
import React, { useContext } from 'react';

const LikeableCats = () => {
    const ctx = useContext(CatContext);

    return <CatProfile cat={ctx.cats[0]} />;
};

export default LikeableCats;
