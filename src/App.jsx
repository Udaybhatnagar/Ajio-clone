
function Navbar(){

  return (
    <div className="Navbar">

      <h1 className="heading">AJIO</h1>
      <ul className="list">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Cart</li>
      </ul>

    </div>
  )
}

const ProductCart= () =>{

  return (
    <div className="product-cart">
       <Product title="HRX Tshirt" ratings="4.5" price="499 Rs"/>

    </div>
  )
}



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


function App() {

  return (
    <>
    <Navbar/>
    <ProductCart/>
    </>
  )
}

export default App
