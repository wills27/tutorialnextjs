'use client'

import store from './store'
import { Provider } from 'react-redux'

import React, { PropsWithChildren } from 'react';


const StoreProvider: React.FC<PropsWithChildren> = ( { children } ) => {
  return <Provider store={store}>{children}</Provider>
};

export default StoreProvider;