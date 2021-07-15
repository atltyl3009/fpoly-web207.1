import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import AddProductForm2 from "./components/form-2";
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./components/product";
import "./dashboard.css";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])
  function onHandleRemove(id) {
    fetch("http://localhost:4000/products/" + id, {
      method: "DELETE"
    }).then((response) => response.json())
      .then((data) => {
        const newProduct = products.filter((item) => item.id !== id);
        setProducts(newProduct);
      })
  }
  const onHandleAdd = (item) => {
    fetch("  http://localhost:4000/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
      });
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
