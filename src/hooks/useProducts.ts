import { useState, useCallback } from 'react';
import { Product } from '../types/product';

async function fetchProducts(): Promise<Product[]> {
  const response = await window.fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  if (response.ok) return data;
  const error = new Error('Error fetching products');
  return Promise.reject(error);
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | string | null>(null);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const products = await fetchProducts();
      setProducts(products);
    } catch (err) {
      const error = err as Error;
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, loading, error, getProducts };
}