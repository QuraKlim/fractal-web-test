import { ReactNode } from "react";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import form from "features/slice/formSlice";

interface StoreProviderProps {
  children?: ReactNode;
}

const store = configureStore({
  reducer: { form },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type TypeRootState = ReturnType<typeof store.getState>;

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
