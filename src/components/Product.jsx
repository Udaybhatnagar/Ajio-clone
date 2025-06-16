function Product(props){
  const{title,price,ratings}=props;

return (
  <div className="Product">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739256402_8748785.jpg?w=480&dpr=1.3" alt="" className="tshirt" />
    <h1>{title}</h1>
    <p>{ratings}</p>
    <p>{price}</p>
  </div>
)

}
export default Product;