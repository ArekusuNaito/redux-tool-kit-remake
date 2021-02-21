import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter.reducer'


export default configureStore(
  {
    reducer: 
    {
      counter: counterSlice,
    },
    
  });