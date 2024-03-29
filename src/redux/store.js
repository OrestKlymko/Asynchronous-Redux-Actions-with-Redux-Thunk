import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { getAllContacts } from './contactsSlicer';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    newContact: getAllContacts.reducer,
  },
});

