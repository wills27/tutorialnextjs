'use client'
import CheckoutWizard from '@/components/CheckoutWizard';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ShippingFormData } from '../shipping/page';

const PlaceOrder: React.FC = () => {
    const{
        loading,
        cartItems,
        shippingPrice,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
    } = useSelector((state:RootState) => state.cart)
    const router = useRouter()

    useEffect(() => {
        if (!paymentMethod)
        {
            router.push('/payment')
        }
    }, [paymentMethod, router]
    )
    const typedShippingAddress = shippingAddress as ShippingFormData
    return (
        <div>
            <CheckoutWizard activeStep={3}/>
            <h1 className='mb-4 text-xl'>Place Order</h1>
            {
                loading ? (
                    <div>Loading</div>
                ) : cartItems.length === 0 ? (
                    <div>
                        Cart is empty.
                        <Link href={'/'}>Go shopping</Link>
                    </div>
                ) : (
                    <div className='grid md:grid-cols-4 md:gap-5'>
                        <div className='overflow-x-auto md:col-span-3'>
                            <div className='card p-5'>
                                <h2 className='mb-2 text-lg'>Shipping Address</h2>
                                <div>
                                    {typedShippingAddress.fullName}, {typedShippingAddress.address}, {' '}
                                    {typedShippingAddress.city}, {typedShippingAddress.postalCode}, {' '}
                                    {typedShippingAddress.country}
                                </div>
                                <div className='pt-4'>
                                    <Link className='default-button inline-block' 
                                        href="/shipping"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                            <div className='card p-5'>
                                <h2>Payment Method:</h2>
                                <div>{paymentMethod}</div>
                                <div className='pt-4'>
                                    <Link 
                                        className="default-button inline-block"
                                        href={"/payment"}
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                            <div className="card overflow-x-auto p-5">
                                <h2 className="mp-2 text-lg">Order Items</h2>
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th className=' px-5 text-left'></th>
                                            <th className=' px-5 text-right'>Quantity</th>
                                            <th className=' px-5 text-right'>Price</th>
                                            <th className=' px-5 text-right'>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr 
                                                key={item.id}
                                                className=' border-b'
                                            >
                                                <td>
                                                    <Link
                                                        href={`/product/${item.id}`}
                                                        className='flex items-center'
                                                    >
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                            style={
                                                                {
                                                                    maxWidth: '100%',
                                                                    height: 'auto'
                                                                }
                                                            }
                                                            className='p-1'
                                                        />
                                                        {item.name}
                                                    </Link>
                                                </td>
                                                <td className='p-5 text-right'>{item.qty}</td>
                                                <td className='p-5 text-right'>${item.price}</td>
                                                <td className='p-5 text-right'>${item.qty * item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='pt-4'>
                                    <Link 
                                        className=' default-button inline-block'
                                        href={'/cart'}
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card p-5'>
                                <h2 className='mb-2 text-lg'>Order Summary</h2>
                                <ul>
                                    <li>
                                        <div className=' mb-2 flex justify-between'>
                                            <div>Items</div>
                                            <div>${itemsPrice}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className=' mb-2 flex justify-between'>
                                            <div>Tax</div>
                                            <div>${taxPrice}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className=' mb-2 flex justify-between'>
                                            <div>Shipping</div>
                                            <div>${shippingPrice}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className=' mb-2 flex justify-between'>
                                            <div>Total</div>
                                            <div>${totalPrice}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => alert('Not implemented')}
                                            className='primary-button w-full'
                                        >
                                            Place Order
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
     )
}

export default PlaceOrder;