import React,{useState} from 'react'
import { Card } from '../Card/Card'
import "./FeaturedProducts.scss"
import { useFetch } from "../../hooks/useFetch";


export const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );
  

// const [data, setData] = useState([]);
// useEffect(() => {
//   const fetchData = async () =>{
//     try {
//         const res = await axios.get(
//                 process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
//             {
//                 headers: {Authorization: "bearer " + process.env.REACT_APP_API_TOKEN}
//             },
//         );
//         setData(res.data.data);
//     } catch (err) {
//         console.log(err);
//     }
//   };
//   fetchData();
// }, [])


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
            {error 
            ? "Something Went Wrong!"
            :loading 
            ? "loading"
            : data?.map((item)=><Card item={item} key={item.id}/>)}
        </div>
    </div>
  )
}

