'use client'
import React, { useState } from 'react';
import { ProductItemProps } from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';

const AddToCart: React.FC<{
    product: ProductItemProps,
    showQty?: boolean,
    redirect?: boolean,
    increasePerClick?: boolean,
}> = ( {product,
        showQty = true,
        redirect = true,
        increasePerClick = false,
} ) => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state:RootState) => state.cart)
    const router = useRouter()
    const [qty, setQty] = useState(1)

    const addToCartHandler = () => {
        let newQty = qty;
        if (increasePerClick) {
            const existItem = cartItems.find((item:ProductItemProps) => item.id === product.id)
            if (existItem) {
                if (existItem.qty + 1 <= product.countInStock)
                {
                    newQty = existItem.qty + 1
                } else {
                    return alert('No more product exist')
                }
            }
        }
        dispatch(addToCart({...product, qty: newQty}))
        if (redirect) router.push('/cart')
    }
    return (
        <>
            { product.countInStock > 0 && showQty && (
                <div className='mb-2 flex justify-between'>
                    <div>Qty</div>
                    <div>
                        <select
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                            {
                                Array.from({length: product.countInStock}, (_, x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))
                            }
                        </select>{' '}
                    </div>
                </div>
                )
            }
            <div>
                {product.countInStock > 0 ? (
                    <button 
                        className='primary-button w-full' 
                        onClick={addToCartHandler}
                    >
                        Add to cart
                    </button>
                ) : (
                    <button disabled>Out of stock</button>
                )}
            </div>
        </>
    )
}

export default AddToCart