import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { addCate, getAllCate, removeCate, updateCate } from "./api/categoryAPI";
import { add, getAll, remove, update } from "./api/productAPI";
import "./dashboard.css";
import Routes from "./routes";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories]= useState([]);
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
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) {
        console.log(error);

      }
    };
    getCategories();
  }, []);
  //products
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
  //categories
  function onHandleRemoveCate(id) {
    try {
      removeCate(id); //xoá dữ liệu trên API
      const newCategory = categories.filter((item) => item.id !== id);
      setCategories(newCategory);

    } catch (error) {
      console.log(error);

    }
  };
  const onHandleAddCate = async (item) => {
    try {
      const { data } = await addCate(item);
      setCategories([...categories, data]);

    } catch (error) {
      console.log(error);

    }
  };
  const onHandleEditCate = async (item) => {
    try {
      const { data } = await updateCate(item);
      console.log("app.js", data);
      const newCategories = categories.map((category) =>
      category.id == data.id ? data : category
      );
      setCategories(newCategories);


    } catch (error) {
      console.log(error);

    }
  };
  return (
    <>
    <Routes products={products} 
    onRemove={onHandleRemove}
     onAdd={onHandleAdd} 
     onEdit={onHandleEdit}
     categories={categories} 
     onRemoveCate={onHandleRemoveCate}
      onAddCate={onHandleAddCate} 
      onEditCate={onHandleEditCate}
     />
     
      </>
  );
}
