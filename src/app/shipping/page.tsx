'use client'

import CheckoutWizard from '@/components/CheckoutWizard';
import { saveShippingAddress } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export interface ShippingFormData {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  }

const shipping: React.FC< {} > = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
    } = useForm<ShippingFormData>()

    const router = useRouter()
    const dispatch = useDispatch()
    const { shippingAddress } = useSelector((state:RootState) => state.cart)

    useEffect(() => {
        const typedShippingAddress = shippingAddress as ShippingFormData;
        setValue('fullName', typedShippingAddress.fullName);
        setValue('address', typedShippingAddress.address);
        setValue('city', typedShippingAddress.city);
        setValue('postalCode', typedShippingAddress.postalCode);
        setValue('country', typedShippingAddress.country);
      }, [setValue, shippingAddress]);

    const submitHandler = ({
        fullName,
        address,
        city,
        postalCode,
        country,
    }: ShippingFormData) => {
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        )

        router.push('/payment')
    }
    return (
    <div>
        <CheckoutWizard activeStep={1}/>
        <form
            className=' mx-auto max-w-screen-md'
            onSubmit={ handleSubmit(submitHandler) }
        >
            <h1 className='mb-4 text-xl'>Shipping Address</h1>
            <div className='mb-4'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                    className=' w-full'
                    id=' fullName'
                    autoFocus
                    {
                        ...register('fullName', {
                            required: 'Please enter full name',
                        })
                    }
                />
                {errors.fullName && (
                    <div className='text-red-500'>{errors.fullName.message}</div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='address'>Address</label>
                <input
                    className=' w-full'
                    id=' address'
                    {
                        ...register('address', {
                            required: 'Please enter address',
                            minLength:{
                                value: 3,
                                message: 'Address is more than 2 chars'
                            }
                        })
                    }
                />
                {errors.address && (
                    <div className='text-red-500'>{errors.address.message}</div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='city'>City</label>
                <input
                    className=' w-full'
                    id=' city'
                    {
                        ...register('city', {
                            required: 'Please enter city',
                        })
                    }
                />
                {errors.city && (
                    <div className='text-red-500'>{errors.city.message}</div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='postalCode'>Postal Code</label>
                <input
                    className=' w-full'
                    id=' postalCode'
                    {
                        ...register('postalCode', {
                            required: 'Please enter postal code',
                        })
                    }
                />
                {errors.postalCode && (
                    <div className='text-red-500'>{errors.postalCode.message}</div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='country'>Country</label>
                <input
                    className=' w-full'
                    id=' country'
                    {
                        ...register('country', {
                            required: 'Please enter country',
                        })
                    }
                />
                {errors.country && (
                    <div className='text-red-500'>{errors.country.message}</div>
                )}
            </div>
            <div className='mb-4 flex justify-between'>
                <button className='primary-button'>Next</button>
            </div>
            
        </form>
    </div>
    )
}

export default shipping;