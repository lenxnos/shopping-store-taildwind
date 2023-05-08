import { useReducer } from 'react';
import { ShoppingCartContextProvider } from "../context/shoppingCartContext"

const countReducer = (state: number, action: { type: 'increment' | 'decrement' }) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
  }
}

export const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, dispatch] = useReducer(countReducer, 0)

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  return (
    <ShoppingCartContextProvider value={{
      count,
      increment,
      decrement,
    }}>
      {children}
    </ShoppingCartContextProvider>
  )
}