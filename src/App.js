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
    fetch("https://60f2372f6d44f300177885ad.mockapi.io/api/test/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])
  function onHandleRemove(id) {
    fetch("https://60f2372f6d44f300177885ad.mockapi.io/api/test/product" + id, {
      method: "DELETE"
    }).then((response) => response.json())
      .then((data) => {
        const newProduct = products.filter((item) => item.id !== id);
        setProducts(newProduct);
      })
  }
  const onHandleAdd = (item) => {
    fetch("https://60f2372f6d44f300177885ad.mockapi.io/api/test/product", {
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
