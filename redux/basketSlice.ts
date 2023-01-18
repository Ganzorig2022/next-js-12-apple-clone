import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// 1) type defintion for initialstate below...
export interface BasketState {
  items: Product[];
}

// 2) shareable STATE --> Global State
const initialState: BasketState = {
  items: [],
};

// 3) Creating basketSlice
export const basketSlice = createSlice({
  name: 'basket', //changed this name
  initialState,
  reducers: {
    // 3.1) Add items to basket function
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      //keep previous items, then add new items by "action.payload"
      state.items = [...state.items, action.payload];
    },
    // 3.2) Remove item from basket function
    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      // find item's INDEX
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newBasket = [...state.items];

      // Removing element from an array using splice method
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Can not remove product (id: ${action.payload.id}) as it is not in the basket!`
        );
      }

      // re-assigning basket array
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Eng: Selectors --> for getting items in state to use in different components
// MGL: Oor componentvvded tuhain basket array-iin items-uudaa awhad "Selector"-oor zaawal awna.
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) => {
  return state.basket.items.filter((item: Product) => item._id === id);
};

export const selectBasketTotal = (state: RootState) => {
  return state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
};

export default basketSlice.reducer;
