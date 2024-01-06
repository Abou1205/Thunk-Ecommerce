import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, updateItem, decreaseItem} from '../redux/actions/basketAction'

const BasketItem = ({basket}) => {

  const dispatch = useDispatch()

  return (
    <div className='rounded-2 p-4 bg-white d-flex justify-content-between align-items-center mb-5 text-black'>
        <div className='d-flex align-items-center gap-3'>
            <img src={basket.image} width={60} height={60} />
            <h4>
                <span>{basket.make}</span>
                <span>{basket.model}</span>
            </h4>
            <h4 className='text-success'>{basket.price} $</h4>
        </div>
        <div className='d-flex align-items-center gap-2'>
            <span>Miktar: {basket.amount}</span>
            <button onClick={() => dispatch(updateItem(basket))} className='btn btn-sm btn-primary'>+</button>
            <button onClick={() => dispatch(decreaseItem(basket))} className='btn btn-sm btn-primary'>-</button>
            <button onClick={() => dispatch(deleteItem(basket.id))} className='btn btn-sm btn-danger'>X</button>
        </div>
    </div>
  )
}

export default BasketItem