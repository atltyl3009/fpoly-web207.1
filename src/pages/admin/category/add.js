import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const AddCateForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        const category = {
            id: Math.random().toString(5).substring(2),
            ...data
        };
        props.onAddCate(category);
        history.push("/category");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Tên danh muc</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="d-block mt-2 text-danger">Vui lòng nhập tên danh muc</span>
                )}
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">Thêm</button>
            </div>
        </form>
    );

};
export default AddCateForm;