import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";

export const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            <img src={item.img} alt="" className="main" />
            <img src={item.img2} alt="" className="sec" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.price}</h3>
            <h3>{item.Discount}% Off</h3>
        </div>
    </div>
    </Link>
  )
}
