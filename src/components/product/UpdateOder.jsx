import { Field, Form, Formik } from "formik";

export const UpdateOder = () => {
  return (
    <div>
      <h1>Product Edit</h1>
      <Formik>
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label>Price</label>
            <Field type="text" name="price" className="form-control" />
          </div>
          <div className="form-group">
            <label>Category</label>
            <Field
              as="select"
              name="category"
              className="form-control"
              required
            >
              <option selected value="" disabled>
                vui long chon
              </option>
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
