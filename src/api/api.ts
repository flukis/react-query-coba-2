/* eslint-disable @typescript-eslint/no-explicit-any */
export const categoryLists = `https://fakestoreapi.com/products/categories`;
export const productLists = (limit: number) =>
  `https://fakestoreapi.com/products?limit=${limit}`;
export const productDetail = (id: any) =>
  `https://fakestoreapi.com/products/${id}`;
