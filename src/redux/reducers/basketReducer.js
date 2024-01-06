import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload.message };
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };
    case ActionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((i) =>
        i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
      );
      return { ...state, basket: newBasket };
    case ActionTypes.DECREASE_ITEM:
      const updatedBasketDecrease = state.basket.map((item) => {
        if (item.id === action.payload) {
          // Decrease the amount, or remove the item if it becomes less than 1
          const newAmount = item.amount - 1;
          return newAmount < 1 ? null : { ...item, amount: newAmount };
        }
        return item;
      });

      // Filter out items with amount less than 1
      const filteredBasketDecrease = updatedBasketDecrease.filter(
        (item) => item !== null
      );

      return { ...state, basket: filteredBasketDecrease };

    case ActionTypes.REMOVE_ITEM:
      const updatedBasket = state.basket.filter((i) => i.id !== action.payload);
      return { ...state, basket: updatedBasket };
    default:
      return state;
  }
};

export default basketReducer;
