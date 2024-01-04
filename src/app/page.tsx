import ProductItem, { ProductItemProps } from '@/components/ProductItem';
import data, { Data } from '@/utils/data';
import Image from 'next/image';

const Home: React.FC = () => {
  const { products }: Data = data;

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product: ProductItemProps) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
