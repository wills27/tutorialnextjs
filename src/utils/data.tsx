import { ProductItemProps } from "@/components/ProductItem";

export interface Data {
  products: ProductItemProps[]
}

const data: Data = {
  products: [
    {
      id: '1',
      name: 'Pink Polo Shirt',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'High-quality shirt',
      brand: 'Brand A', // Add the brand property
      qty: 0
    },
    {
      id: '2',
      name: 'Marl Polo Shirt',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      rating: 4.0,
      numReviews: 10,
      description: 'High-quality shirt',
      brand: 'Brand B', // Add the brand property
      qty: 0
    },
    {
      id: '3',
      name: 'Slim Fit Polo Shirt',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description: 'High-quality shirt',
      brand: 'Brand C', // Add the brand property
      qty: 0
    },
    {
      id: '4',
      name: 'Orange Polo Shirt',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: 'High-quality shirt',
      brand: 'Brand D', // Add the brand property
      qty: 0
    },
  ],
}

export default data
