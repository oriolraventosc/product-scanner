import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ProductReducer } from "./features/ProductSlicer/ProductSlicer";
import { uiActionsReducer } from "./features/UiSlicer/UiSlicer";

export const store = configureStore({
  reducer: {
    productActions: ProductReducer,
    uiActions: uiActionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
