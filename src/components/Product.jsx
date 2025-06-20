function Product(props){
  const{image,title,price,rating}=props.product;

return (
  <div className="Product">
    <img src={image} alt="" className="tshirt" />
    <h1>{title}</h1>
<<<<<<< HEAD
    <p>Ratings:{rating.rate}</p>
    <p> Price:{price}</p>
=======
    <p>{ratings}</p>
    <p>{price}</p>
  
>>>>>>> 986fbb57f18cb6ae7f001912e969108df1d3b2f5
  </div>
)
}
export default Product;
