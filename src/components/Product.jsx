function Product(props){
  const{image,title,price,rating}=props.product;

return (
  <div className="Product">
    <img src={image} alt="" className="tshirt" />
    <h1>{title}</h1>
  </div>
)
}
export default Product;
