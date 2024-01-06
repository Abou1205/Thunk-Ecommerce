import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketAction";

const Card = ({ product }) => {

  const state = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  // If the item is in the basket, display a button to increase the amount; otherwise, display a button to add to the basket.
  const found = state.basket.find((item) => item.id === product.id)


  // If it is in the basket, increase the amount; otherwise, add to the basket.
  const handleClick = () => {
    if(found){
      dispatch(updateItem(found))
    } else{
      dispatch(addToBasket(product))
    }
  }

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img
          src={product.image}
          width={"200px"}
          height={"200px"}
          className="rounded"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{height: "2.5rem"}} >{product.title}</h5>
        <p style={{height: "1rem"}}>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>

        <button onClick={handleClick} className="w-100">
          {found ? `Increase Amount (${found.amount})` : 'Add to Basket' }
        </button>
      </div>
    </div>
  );
};

export default Card;
