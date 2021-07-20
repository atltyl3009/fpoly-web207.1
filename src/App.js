import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import "./dashboard.css";
import Routes from "./routes";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);

      }
    };
    getProducts();
  }, []);
  function onHandleRemove(id) {
    try {
      remove(id); //xoá dữ liệu trên API
      const newProduct = products.filter((item) => item.id !== id);
      setProducts(newProduct);

    } catch (error) {
      console.log(error);

    }
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);

    } catch (error) {
      console.log(error);

    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await update(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);


    } catch (error) {
      console.log(error);

    }
  };
  return (
    <Routes products={products} 
    onRemove={onHandleRemove}
     onAdd={onHandleAdd} 
     onEdit={onHandleEdit}
     />
  );
}
