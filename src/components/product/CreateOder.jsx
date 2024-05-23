import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../../service/ProductService";
import { toast } from "react-toastify";
import { createOder } from "../../service/OderService";

export const CreateOder = () => {
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getAll = () => {
      getAllProduct().then((data) => {
        setProduct(data);
      });
    };
    getAll();
  }, []);

  const handleCreateOder = (oder) => {
    const product = JSON.parse(oder.sanPham);
    oder.sanPham = product;
    createOder(oder).then((data) => {
      toast.success("Create product successfully");
      navigate("/");
    });
  };
  if (!product) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>Product Create</h1>
      <Formik
        initialValues={{
          ma: "",
          gia: "",
          ngay: "",
          soLuong: "",
          tongTien: "",
          sanPham: JSON.stringify(product[0]),
        }}
        onSubmit={(values) => {
          handleCreateOder(values);
        }}
      >
        <Form>
          <div className="form-group">
            <label>ma</label>
            <Field type="text" name="ma" className="form-control" required />
          </div>

          <div className="form-group">
            <label>gia</label>
            <Field type="text" name="gia" className="form-control" required />
          </div>

          <div className="form-group">
            <label>ngay</label>
            <Field type="text" name="ngay" className="form-control" required />
          </div>
          <div className="form-group">
            <label>soLuong</label>
            <Field
              type="text"
              name="soLuong"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>tongTien</label>
            <Field
              type="text"
              name="tongTien"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sanPham">sanPham</label>
            <Field
              as="select"
              id="sanPham"
              name="sanPham"
              className="form-control"
              required
            >
              <option selected value="" disabled>
                vui long chon
              </option>
              {product.map((product) => (
                <option key={product.id} value={JSON.stringify(product)}>
                  {product.tenSanPham}
                </option>
              ))}
            </Field>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
