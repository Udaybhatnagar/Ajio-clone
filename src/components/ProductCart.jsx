import {  useEffect, useState } from "react";
import Product from "./Product";

const ProductCart= () =>{
  const [productlist,setproductlist]=useState([]);
  const [search,setsearh]=useState("");

  useEffect(function(){
    fetchdata();
  },[])

async function  fetchdata(){
  const data=  await fetch("https://fakestoreapi.com/products");
  const resdata= await data.json();
  setproductlist(resdata);
}

const handleSearch = () => {
    const filterdata = productlist.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setproductlist(filterdata);
  };

  return (
    <div>
      <div className="text-box">
         <input type="text" name="" id=""  onChange={(e)=> setsearh(e.target.value)
          
         } value={search}/>


      <button className="btn-search" onClick={handleSearch}>Search</button>
      </div>
       <div className="product-cart">
       {productlist.map((product) => {return <Product key={product.id} product={product} /> }
      )}
    </div>

    </div>
  )
}
export default ProductCart;
