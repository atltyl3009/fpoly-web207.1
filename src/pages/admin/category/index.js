import { Link } from "react-router-dom";
export default function Category(props) {
    console.log(props);
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-success">Quản lý danh mục</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link
                        to="/category/add"
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                    >
                        Thêm danh muc
                    </Link>
                </div>
            </div>
            <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên danh mục</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <Link
                    to={`/category/${item.id}/edit`}
                    className="btn btn-warning btn-sm"
                  >
                    Sửa
                  </Link>
                <td width="50">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onRemoveCate(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    )
}