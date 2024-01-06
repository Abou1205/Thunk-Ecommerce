import React from 'react'
import {getProducts} from './../redux/actions/productAction.js'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading.jsx'
import Card from '../components/Card.jsx'
import { getBasketProducts } from '../redux/actions/basketAction.js'

const MainPage = () => {

    const dispatch = useDispatch()

    const state = useSelector((store) => store.product)
    

    useEffect(() => {
      dispatch(getProducts())
      dispatch(getBasketProducts())

    },[])

  return (
    <div>
      {/* laoding state  */}
      {state.isLoading && <Loading />}
      
      {/*  error state */}
      {state.isError && (
        <p className='text-center my-5 fw-bold'>
          Sorry, there is something wrong... <br />
          {state.isError}
        </p>
      )}

      {/*  Display products when data is loaded and no error */}
      <div className='my-5 d-flex justify-content-center gap-4 flex-wrap'>
        {state.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}

      </div>
    </div>
  )
}

export default MainPage 