import React from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useState } from 'react';

export const Product = () => {
  const[selectImg,setSelectImg] = useState();
  const[quantity,setQuantity] = useState(1);
  const imageData=[
  "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
  "https://cdn.shopify.com/s/files/1/0623/8850/2700/products/PKWM007_2_700x.jpg?v=1654782450"
]

  return (
    
    <div className='product'>
      <div className="left">
         <div className="images">
            <img src={imageData[0]} alt="" onClick={e=>setSelectImg(0)} />
            <img src={imageData[1]} alt="" onClick={e=>setSelectImg(1)}/>
         </div>
         <div className="mainImg">
          <img src={imageData[selectImg]} alt="" />
         </div>
      </div>
      <div className="right">
          <h1>Title</h1>
          <span className='price'>$199</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Voluptatem consequuntur ea nihil beatae quod velit vero odit,
             aperiam ipsam. Fugit libero fuga consectetur soluta assumenda aliquid
              tenetur reiciendis excepturi modi?</p>
          <div className="quantity">
             <button onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
             {quantity}
             <button onClick={()=> setQuantity((prev) => (prev + 1))}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> Add To Cart
          </button>
          <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
           
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        
      
    </div>
  );
};