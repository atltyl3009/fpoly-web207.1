import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { getCate } from "../../../api/categoryAPI";
const EditCateForm = (props) => {
    const [category, setCategory] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
     const getCategory = async () => {
         const { data } = await getCate(id)
         setCategory(data);
         reset(data);
     };
     getCategory();
    }, [])
    const onSubmit = (data) =>{
        console.log(data);
        const category = {
            id,
            ...data
        };
        console.log(category);
        props.onEditCate(category);
        history.push("/category");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              defaultValue={category.name}
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="d-block mt-2 text-danger">Vui lòng nhập tên sản phẩm</span>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Cập nhật
          </button>
        </form>
      );

};
export default EditCateForm