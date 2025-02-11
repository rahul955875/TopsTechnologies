import React from "react";
import { Link } from "react-router";
import Navigation from "./Navigation";
const ProductPage = () => {
  return (
    <>
      <div className="container py-3">
        <h5 className="bg-dark text-white p-3 text-center">Add Product</h5>

        <form className="pt-3">
          <div className="row g-3">
            <div className="col-4">
              <input
                type="number"
                placeholder="Enter Product Id"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input type="text" placeholder="Title" className="form-control" />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Description"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="Old Price"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="Discount (%)"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="New Price"
                className="form-control"
              />
            </div>
            <div className="col-8">
              <input
                type="text"
                placeholder="Image URL"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <button className="btn btn-primary w-100">Add Product</button>
            </div>
            <div className="col-12 text-center">
              <h4>
                <Link to="/Home">Show Product</Link>
              </h4>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductPage;
