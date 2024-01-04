'use client'

import React, { PropsWithChildren, useEffect } from 'react'
import Header from './Header'
import CartSidebar from './CartSidebar'
import { hideLoading } from '@/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const App: React.FC<PropsWithChildren> = ( { children } ) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  return (
    <div>
        <div className='mr-32'>
            <Header/>
            <main className='p-4'>{children}</main>
        </div>
        <CartSidebar/>
    </div>
  )
}

export default App