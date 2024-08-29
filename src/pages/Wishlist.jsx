import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addtoCart } from '../redux/cartSlice';




function Wishlist() {
  const wishlistItem= useSelector((state)=>state.wishlistReducer);
  console.log(wishlistItem);
  const dispatch = useDispatch();

  const handleWishlist = (item) => {
    dispatch(addtoCart(item));
    dispatch(removeFromWishlist(item.id))
  }
  
  return (
    <>
    <button className='btn btn-success mt-4 ms-4'>
      <Link to={'/'} style={{textDecoration:"none",color:"white"}} >
      <i class="fa-solid fa-arrow-left"></i> back to home
      </Link>
    </button>
    <Row className='m-5'> 
      {
        wishlistItem?.length>0?
        wishlistItem.map((item)=>(

       
        <Col sm={12} ms={6} lg={4} xl={3} className='mb-3'>
      <Card style={{ width: '18rem' }} key={item.title}>
      <Card.Img variant="top" src={item.image} height={'200px'} className='p-3'/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,50)}...</p>
          <p className='fw-bolder fs-6'>price: <i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash" ></i></Button>
        <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>

        </div>
        
      </Card.Body>
    </Card>
      </Col>
       )):
      <div className='d-flex align-items-center flex-column vh-100' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzChvQ6zMMO6HMf9shw8Ow4SJTrugCdcj26Q&s" alt="" />
        <h3 className='f-4' >your cart is empty</h3>
      </div>
      }

      

    </Row>
    </>
  )
}

export default Wishlist