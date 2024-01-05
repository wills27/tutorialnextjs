import { RootState } from '@/redux/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const {loading, cartItems} = useSelector((state:RootState) => state.cart)
  return (
    <header>
        <nav className='flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white'>
            <Link 
              href="/" 
              className='text-lg font-bold'
            >
              Amazon Shopping Cart
            </Link>
            <div>
            <span className='cart-badge'>
              {loading ? '' : (cartItems ? cartItems.reduce((a, c) => a + c.qty, 0) : 0)}
            </span>
                <Link href='/cart'>Cart</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header;