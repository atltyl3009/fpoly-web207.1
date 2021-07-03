import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./components/product";
import "./dashboard.css";
import data from "./data";
export default function App() {
 const [products, setProducts]= useState(data);
 function onHandleRemove(id){
   const newProduct= products.filter((item)=> item.id!==id);
   setProducts(newProduct);
 }
 
  return (
    <div className="App">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Product products={products} onRemove={onHandleRemove} />
            </main>
          </div>
        </div>
      </div>
      {/* <button onclick={changeColor}>Xanh</button>
      <button onclick={changeColor}>Đỏ</button>
   <div style={{background:color, width:200, height:200}}></div> */}
    </div>
  );
}
