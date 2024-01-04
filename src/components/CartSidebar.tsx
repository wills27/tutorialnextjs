import Image from 'next/image'
import { ProductItemProps } from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';


const CartSidebar: React.FC = () => {
  const {loading, cartItems, itemsPrice} = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const addToCartHandler = (product:ProductItemProps, qty:number) =>{
    dispatch(addToCart({...product, qty}))
  }

  const removeFromCartHandler = (id:string) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className='fixed top-0 right-0 w-32 h-full shadow-lg boder-l border-l-gray-700 overflow-scroll'>
        {loading ? (
          <div className='py-5 px-2'>Loading...</div>
        ) : cartItems.length === 0 ? (
          <div className='py-5 px-2'>Cart is empty</div>
        ): (
          <>
            <div className='p-2 flex flex-col items-center border-b border-b-gray-600'>
              <div>Subtotal</div>
              <div className='font-bold text-orange-700'>&{itemsPrice}</div>
              <div>
                <Link href='/cart' className='w-full text-center p-1 rounded-2xl border-2'>
                  Go to cart
                </Link>
              </div>
              {
                cartItems.map((item:ProductItemProps) => (
                  <div key={item.id} className='p-2 flex flex-col items-center border-b border-b-gray-600'>
                    <Link href={`/product/${item.id}`} className='flex items-center'>
                      <Image src={item.image} alt={item.name} width={50} height={50} className='p-1'/>
                    </Link>
                    <select value = {item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {Array.from({length: item.countInStock}, (_, x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button className='default-button mt-2' onClick={() => removeFromCartHandler(item.id)}>
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </>
        )}
    </div>
  );
};

export default CartSidebar;