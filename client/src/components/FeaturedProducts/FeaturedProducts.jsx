import React from 'react'
import { Card } from '../Card/Card'
import "./FeaturedProducts.scss"

export const FeaturedProducts = ({type}) => {
    const data=[
        {
            id:1,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            price:150,
            Discount:10
        },
        {
            id:2,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            price:150,
            Discount:10
        },
        {
            id:3,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            price:150,
            Discount:10
        },
        {
            id:4,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            price:150,
            Discount:10
        }
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type}Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               Illo at possimus odio ipsum voluptatum aliquid nostrum,
               sint in necessitatibus esse,
               obcaecati est delectus ex quis! Vel nostrum dolores quia deleniti.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}
