import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        name: "",
        description: "",
        price: "",
        productType: "",
      },
      // Validating Forms while entering the data
      validate: (values) => {
        let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

        if (!values.name) {
          errors.name = "Please enter product name";
        } else if (values.name.length > 20) {
          errors.name = "Name shouldn't be more than 20 letters";
        }

        if (!values.description) {
          errors.description = "Please enter product description";
        } 

        if (!values.price) {
          errors.price = "Please enter product price";
        }
        if (!values.productType) {
            errors.productType = "Please select product type";
          }

        return errors;
      },
      //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", values);
          navigate("/portal/user-list");
        } catch (error) {
          console.log(error);
          alert("Validation failed");
          setLoading(false);
        }

        console.log(values);
      }

    });
  return (
    <div className='container'>

      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Name</label>
            <input name='name' value={myFormik.values.name} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>Description</label>
            <input name='description' value={myFormik.values.description} onChange={myFormik.handleChange} type={"mail"}
              className={`form-control ${myFormik.errors.description ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.description}</span>
          </div>

          <div className='col-lg-4'>
          <label>Price</label>
            <input name='price' value={myFormik.values.price} onChange={myFormik.handleChange} type={"mail"}
              className={`form-control ${myFormik.errors.price ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.price}</span>
          </div>

          <div className='col-lg-4'>
            <label>Product Type</label>
            <select name='productType' value={myFormik.values.productType} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.productType ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="TN">Dairyproducts</option>
              <option value="KL">Stationaryproducts</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.productType}</span>
          </div>
          <div className='col-lg-4 mt-3'>
            <input disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
      {/* {JSON.stringify(myFormik.values)} */}
    </div>
  );
}

export default UserCreate