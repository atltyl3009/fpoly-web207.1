import { useForm } from "react-hook-form";

const AddProductForm2 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const product = {
      id: Math.random().toString(5).substring(2),
      ...data
    };
    props.onAdd(product);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Tên sản phẩm</label>
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
        <label className="form-label">Giá sản phẩm</label>
        <input type="number" className="form-control" {...register("price", { required:true})} />
        {errors.name && (
          <span className="d-block mt-2 text-danger">Vui lòng nhập giá sản phẩm</span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Chi Tiết</label>
        <input
          type="text"
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
        Thêm sản phẩm
      </button>
    </form>
  );
};
// AddProductForm2.PropTypes = {
//   onAdd: PropTypes.func()
// };
export default AddProductForm2;
