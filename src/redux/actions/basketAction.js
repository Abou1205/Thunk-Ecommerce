import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const getBasketProducts = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_BASKET_LOADING });

  axios
    .get("http://localhost:3050/basket")
    .then((res) =>
      dispatch({ type: ActionTypes.SET_BASKET, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.SET_BASKET_ERROR, payload: err })
    );
};

//adding new element to the basket
export const addToBasket = (product) => (dispatch) => {
  // yeni obje oluşturup miktarı 1 olarak ekle
  const newProduct = { ...product, amount: 1 };

  // objeden gereksiz verileri kaldır
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;

  // save product to the api
  axios
    .post("http://localhost:3050/basket", newProduct)
    // add product to store
    .then(() =>
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct })
    );
};

// increase amount of the item in the basket
export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: product.id })
    );
};

// decrease amount of the item in the basket
export const decreaseItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount - 1,
    })
    .then(() =>
      dispatch({ type: ActionTypes.DECREASE_ITEM, payload: product.id })
    );
};

// delete the item in the basket
export const deleteItem = (id) => (dispatch) => {
    axios
      .delete(`http://localhost:3050/basket/${id}`)
      // api isteği başarılı olursa store'dan kaldır
      .then(() => {
        dispatch({
          type: ActionTypes.REMOVE_ITEM,
          payload: id,
        });
      });
  };
