import React from 'react'
import "./List.scss"
import { Card } from '../Card/Card'
export const List = () => {
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
    <div className='list'>{data.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}
