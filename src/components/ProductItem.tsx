import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProductRate from './ProductRate';

export interface ProductItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  description: string;
  qty: number
  brand: string
  reduce: () => {
    return 
  }
}

const ProductItem: React.FC<ProductItemProps> = ( product ) => {
  return (
    <div className='card'>
      <Link href={`/product/${product.id}`}>
        <Image 
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className='rouded shadow object-cover h-100 w-full'
        />
      </Link>
      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.id}`}>
          <h2 className='text-lg'>{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews}/>
        <p className='mb-2'>{product.brand}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;