'use client'

import CheckoutWizard from '@/components/CheckoutWizard';
import { savePaymentMethod } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ShippingFormData } from '../shipping/page';

interface FormValues {
  paymentMethod: string;
}

const Payment: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress, paymentMethod } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    const typedShippingAddress = shippingAddress as ShippingFormData;
    if (!typedShippingAddress.address) {
      return router.push('/shipping');
    }
    setValue('paymentMethod', paymentMethod);
  }, [paymentMethod, router, setValue, shippingAddress]);

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    dispatch(savePaymentMethod(data.paymentMethod));
    router.push('/placeorder');
  };

  return (
    <div>
      <CheckoutWizard activeStep={1} />
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className='mb-4 text-xl'>Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className='mb-4'>
            <input
              className='p-2 outline-none focus:ring-0'
              id={payment}
              type='radio'
              value={payment}
              {...register('paymentMethod', {
                required: 'Please select payment method',
              })}
            />
            <label className='p-2' htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        {errors.paymentMethod && (
          <div className='text-red-500'>{errors.paymentMethod.message}</div>
        )}
        <div className='mb-4 flex justify-between'>
          <button className='primary-button'>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
