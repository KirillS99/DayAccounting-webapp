import { configureStore } from '@reduxjs/toolkit';

export interface IApplicationState {}

export const createApplicationStore = () => {
  const store = configureStore<IApplicationState>({
    reducer: {},
    devTools: process.env.NODE_ENV === 'development',
  });

  return store;
};
