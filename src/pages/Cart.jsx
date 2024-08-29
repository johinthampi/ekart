import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  //hook used to navigate a particular path or page
  const navigate = useNavigate()
  const [total,setTotal]= useState(0)
  const getTotal = () => {
    let sum = 0
    cartArray.forEach((item) => {
      sum = sum + item.price;
    })
    setTotal(sum)
  }
  useEffect(() => {
    getTotal();
  }, [cartArray])
  const handleCart = () => {
    alert("thank you...")
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      <div style={{marginTop:"100px"}}>
        
          {
          cartArray?.length > 0 ?
          <div className='row w-100'>
              <div className='col-lg-6 m-5'>
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>product title</th>
                      <th>image</th>
                      <th>price</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray?.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title.slice(0, 20)}...</td>
                          <td><img src={item.image} alt="" height="75px" width="75px" /></td>
                          <td>{item.price}</td>
                          <td>
                            <Button variant="outline-danger"
                              onClick={() => dispatch(removeFromCart(item.id))}>
                              <i class="fa-solid fa-trash" ></i></Button>

                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>cart summary</h3>
                  <h5>Total number of products: <span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
                  <h5>total price: <span className='text-warning fw-bolder'>{ total }</span></h5>
                  <button className='btn btn-success rounded w-100' onClick={handleCart}>checkout</button>
                  </div>
              </div>
              </div>:
              <div className='d-flex align-items-center flex-column vh-100' >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzChvQ6zMMO6HMf9shw8Ow4SJTrugCdcj26Q&s" alt="" />
                <h3 className='f-4' >your cart is empty</h3>
              </div>
          }
        </div>
      
    </>
  )
}

export default Cart