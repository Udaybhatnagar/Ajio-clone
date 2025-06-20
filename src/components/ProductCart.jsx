import { use, useEffect, useState } from "react";
import Product from "./Product";

const ProductCart= () =>{
  const [productlist,setproductlist]=useState([]);
  const [search,setsearh]=useState(" ");

  useEffect(function(){
    fetchdata();
  },[])

async function  fetchdata(){
  const data=  await fetch("https://fakestoreapi.com/products");
  const resdata= await data.json();
  setproductlist(resdata);
}

  return (
    <div>
      <div className="text-box">
         <input type="text" name="" id=""  onChange={(e)=> setsearh(e.target.value)
          
         } value={search}/>


      <button className="btn-search" onClick={()=>{
        const filterdata=productlist.filter((product)=>{
          return  product.title.includes(search);
        })
        setsearh(filterdata);
      }}>Search</button>
      </div>
       <div className="product-cart">
       {productlist.map((product) => {return <Product key={product.id} product={product} /> }
      )}
    </div>

    </div>
<<<<<<< HEAD
   
=======
  
  
>>>>>>> 986fbb57f18cb6ae7f001912e969108df1d3b2f5
  )
}
export default ProductCart;
