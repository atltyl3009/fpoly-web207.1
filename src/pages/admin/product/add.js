import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const AddProductForm = (props, dataCate) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = (data) =>{
        const product = {
            id: Math.random().toString(5).substring(2),
            ...data
        };
        props.onAdd(product);
        history.push("/product");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label text-info">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập tên sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-info">Giá sản phẩm</label>
            <input type="number" className="form-control" {...register("price", { required:true})} />
            {errors.price && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập giá sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-info">Chi Tiết</label>
            <input
              type="text"
              className="form-control text-info"
              {...register("detail", { required: true })}
            />
            {errors.detail && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập chi tiết sản phẩm</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-info">Danh mục</label>
            <select className="form-control" {...register("category")}>
              <option value="Danh mục A">Danh mục A</option>
              <option value="Danh mục B">Danh mục B</option>
            </select>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">Thêm</button>
            </div>
        </form>
      );

};
export default AddProductForm;