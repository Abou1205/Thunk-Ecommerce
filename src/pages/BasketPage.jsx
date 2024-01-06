import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getBasketProducts } from '../redux/actions/basketAction'
import Loading from '../components/Loading'
import BasketItem from '../components/BasketItem'

const BasketPage = () => {

  const state = useSelector((store) => store.basket)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasketProducts())
  },[])

  const totalPrice = state.basket.reduce((total,i) => total + i.price * i.amount,0)

  return (
    <div className='row px-4 py-5' style={{width: "100vw"}}>
      {/* loading state */}
      {state.isLoading && <Loading />}

      {/* error state */}
      {state.isError && (
        <p className='text-center my-5 fw-bold'>
          Sorry, there is something wrong... <br />
          {state.isError}
        </p>
      )}

      <div className='col md-8'>
        {/* Display products when data is loaded and no error */}
        {state.basket.map((item) => (
          <BasketItem basket={item} key={item.id}/>
        ))}
      </div>
      

      <div className='col md-4'>
        <div className='bg-white p-5 rounded text-black'>
          <h5 className='text-center'>Total Price: {totalPrice} $</h5>
          <button className='w-100 my-2'>Complete purchase</button>
        </div>
      </div>

    </div>
  )
}

export default BasketPage