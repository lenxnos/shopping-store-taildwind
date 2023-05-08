import { createContext, useContext }  from 'react';

type State = {
  count: number,
  increment: () => void,
  decrement: () => void,
}

const shoppingCartContext = createContext<State |null>(null);

const ShoppingCartContextProvider = shoppingCartContext.Provider;

export const useShoppingCart = () => {
  const context = useContext(shoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartContextProvider');
  }
  return context;
};

export { shoppingCartContext, ShoppingCartContextProvider };