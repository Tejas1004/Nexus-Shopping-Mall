import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export const Cart = () => {

    const data=[
        {
            id:1,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, laudantium dolorum! Explicabo neque officia nisi, dicta minima provident qui accusantium voluptatibus? Obcaecati cum magnam distinctio veritatis fugit, maxime architecto a Adipisci saepe pariatur et id excepturi molestiae hic. Sunt natus provident, ex soluta odio eveniet tempore facilis nam quod harum eos magni quisquam adipisci quae illum aut molestias ratione alias.",
            price:150,
            Discount:10
        },
        {
            id:1,
            img:"https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
            title:"Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, laudantium dolorum! Explicabo neque officia nisi, dicta minima provident qui accusantium voluptatibus? Obcaecati cum magnam distinctio veritatis fugit, maxime architecto a Adipisci saepe pariatur et id excepturi molestiae hic. Sunt natus provident, ex soluta odio eveniet tempore facilis nam quod harum eos magni quisquam adipisci quae illum aut molestias ratione alias.",
            price:150,
            Discount:10
        }
    ]

  return (
    <div className='cart'>
        <h1>Products In Your Cart</h1>
        {data.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">1* ${item.price}</div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            </div>

        ))}
       <div className="total">
           <span>SUBTOTAL</span>
           <span>$123</span>
       </div>
          <button>Proceed To checkout</button>
          <span className="reset">Reset Cart</span>
    </div>
  )
}
