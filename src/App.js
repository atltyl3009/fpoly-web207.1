import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddProductForm2 from "./components/form-2";
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./components/product";
import "./dashboard.css";
import data from "./data";
export default function App() {
  const [products, setProducts] = useState(data);
  function onHandleRemove(id) {
    const newProduct = products.filter((item) => item.id !== id);
    setProducts(newProduct);
  }
  const onHandleAdd = (item) => {
    setProducts([...products, item]);
  };
  return (
    <div className="App">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <AddProductForm2 onAdd={onHandleAdd} />
              <Product products={products} onRemove={onHandleRemove} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
