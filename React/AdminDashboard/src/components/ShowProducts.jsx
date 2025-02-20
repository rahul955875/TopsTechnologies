import React, { useState } from "react";
import useValidationConfig from "./useValidationConfig";

const ShowProducts = () => {
  const [validateFormFun, error, setError] = useValidationConfig();

  const categoryList = ["Cameras", "Mobiles", "Laptops", "Accesories"];
  const getData = JSON.parse(localStorage.getItem("ProductData")) || [];
  const [productData, setProductData] = useState(getData);
  console.log("rendering");
  localStorage.setItem("ProductData", JSON.stringify(productData));
  const handleDeleteProduct = (id) => {
    const filterData = productData.filter((product) => product.id !== id);
    setProductData(filterData);
    localStorage.setItem("ProductData", JSON.stringify(filterData));
  };
  const [proUpdatedData, setProUpdatedData] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    oldPrice: "",
    rate: "",
    newPrice: "",
    image: "",
  });
  const [fetchRealProData, setFetchRealProData] = useState({});
  const handleEdit = (fetchProductData) => {
    setProUpdatedData(fetchProductData);
    setFetchRealProData(fetchProductData);
    // console.log(fetchRealProData);
  };
  const handleChange = (e) => {
    const existingProData = {
      ...proUpdatedData,
      [e.target.name]: e.target.value,
    };
    if (e.target.name === "oldPrice" || e.target.name === "rate") {
      if (
        existingProData.oldPrice > 0 &&
        existingProData.rate >= 0 &&
        existingProData.rate <= 100
      ) {
        existingProData.newPrice =
          Math.round(parseFloat(existingProData.oldPrice) *
          (1 - (parseFloat(existingProData.rate) || 0) / 100));
      }
      else{
        existingProData.newPrice = 'Not valid'
      }
    }
    setProUpdatedData(existingProData);
    setError({});
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateFormFun(proUpdatedData);
    if (Object.keys(isValid).length) return;
    setProductData((prevData) =>
      prevData.map((product) =>
        product.id === fetchRealProData.id ? proUpdatedData : product
      )
    );
    alert('Product details updated successfuly')
  };
  return (
    <>
      <div className="container p-5">
        <table className="table shadow">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rate</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={crypto.randomUUID()}>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>
                  <s>{product.oldPrice}</s>
                  <div>{product.newPrice}</div>
                </td>
                <td>{product.rate}%</td>
                <td>
                  <img
                    src={product.image}
                    className="product-img"
                    alt="product img"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#updateProduct"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* model */}

      <div
        className="modal fade"
        id="updateProduct"
        tabIndex="-1"
        aria-labelledby="updateProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateProductLabel">
                Update Product Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-4">
                    <input
                      type="text"
                      placeholder="Enter Product Id"
                      className="form-control"
                      name="id"
                      value={proUpdatedData.id}
                      readOnly
                    />
                  </div>
                  <div className="col-4">
                    <select
                      name="category"
                      value={proUpdatedData.category}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="" hidden>
                        --select Category
                      </option>
                      {categoryList.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <p className="text-danger">{error.category}</p>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control"
                      name="title"
                      value={proUpdatedData.title}
                      onChange={handleChange}
                    />
                    <p className="text-danger">{error.title}</p>
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="Description"
                      className="form-control"
                      name="description"
                      value={proUpdatedData.description}
                      onChange={handleChange}
                    ></textarea>
                    <p className="text-danger">{error.description}</p>
                  </div>
                  <div className="col-4">
                    <input
                      type="number"
                      placeholder="Old Price"
                      className="form-control"
                      name="oldPrice"
                      value={proUpdatedData.oldPrice}
                      onChange={handleChange}
                    />
                    <p className="text-danger">{error.oldPrice}</p>
                  </div>
                  <div className="col-4">
                    <input
                      type="number"
                      placeholder="Discount (%)"
                      className="form-control"
                      name="rate"
                      value={proUpdatedData.rate}
                      onChange={handleChange}
                    />
                    <p className="text-danger">{error.rate}</p>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="New Price"
                      className="form-control"
                      name="newPrice"
                      value={proUpdatedData.newPrice}
                      readOnly
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Image URL"
                      className="form-control"
                      name="image"
                      value={proUpdatedData.image}
                      onChange={handleChange}
                    />
                    <p>{error.image}</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
