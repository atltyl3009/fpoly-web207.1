import { useState } from "react";

const AddProductForm = (props) => {
  const [controlValue, setControlValue] = useState({});
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setControlValue({
      ...controlValue,
      [name]: value
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const product = {
      id: Math.random().toString(5).substring(2),
      ...controlValue
    };
    props.onAdd(product);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      {JSON.stringify(controlValue)}
      <div className="mb-3">
        <label className="form-label">Tên sản phẩm</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={onHandleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Giá sản phẩm</label>
        <input
          type="text"
          className="form-control"
          name="price"
          onChange={onHandleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Danh mục</label>
        <select onChange={onHandleChange} name="category">
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
export default AddProductForm;
