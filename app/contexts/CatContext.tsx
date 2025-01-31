import { useFetchCats } from '@app/hooks';
import React, { createContext } from 'react';

const initContext = { cats: [] };

export const CatContext = createContext<{
  cats: Cat[];
}>(initContext);

type Props = {
  children: React.ReactNode;
};

export const CatProvider: React.FC<Props> = ({ children }) => {
   const { cats } = useFetchCats();

  return <CatContext.Provider value={{cats: cats}}>{children}</CatContext.Provider>;
};
