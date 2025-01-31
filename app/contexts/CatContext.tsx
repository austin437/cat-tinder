import { useFetchCats } from '@app/hooks';
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

const initContext = { cats: [], setCats: () => {} };

export const CatContext = createContext<{
  cats: Cat[];
  setCats: Dispatch<SetStateAction<Cat[]>>;
}>(initContext);

type Props = {
  children: React.ReactNode;
};

export const CatProvider: React.FC<Props> = ({ children }) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const { cats: fetchedCats } = useFetchCats();

  useEffect(() => {
    if (fetchedCats.length > 0) {
      setCats(fetchedCats);
    }
  }, [fetchedCats]);

  return <CatContext.Provider value={{ cats: cats, setCats: setCats }}>{children}</CatContext.Provider>;
};
