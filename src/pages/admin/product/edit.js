import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { get } from "../../../api/productAPI";
const EditProductForm = (props) => {
    const [product, setProduct] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
     const getProduct = async () => {
         const { data } = await get(id)
         setProduct(data);
         reset(data);
     };
     getProduct();
    }, [])
    const onSubmit = (data) =>{
        console.log(data);
        const product = {
            id,
            ...data
        };
        console.log(product);
        props.onEdit(product);
        history.push("/product");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              defaultValue={product.name}
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập tên sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Giá sản phẩm</label>
            <input type="number" 
            defaultValue={product.price}
            className="form-control" 
            {...register("price", { required:true})} />
            {errors.price && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập giá sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Chi Tiết</label>
            <input
              type="text"
              defaultValue={product.detail}
              className="form-control"
              {...register("detail", { required: true })}
            />
            {errors.detail && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập chi tiết sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Danh mục</label>
            <select className="form-control" {...register("category")}>
              <option value="Danh mục A">Danh mục A</option>
              <option value="Danh mục B">Danh mục B</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            Cập nhật
          </button>
        </form>
      );

};
export default EditProductForm;