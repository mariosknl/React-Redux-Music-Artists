import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer';
import api from '../middleware/api';

export default function store() {
  return configureStore({
    reducer,
    middleware: [api],
  });
}
