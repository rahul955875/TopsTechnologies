import React, { useState } from "react";
import { Link } from "react-router";

const ProductPage = () => {
  const categoryList = ['Cameras','Mobiles','Laptops','Accesories']
  const [input, setInput] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    oldPrice: "",
    rate: "",
    newPrice: "",
    image: "",
  });
  const handleChange = (e) => {
    const finalData = { ...input, [e.target.name]: e.target.value }
    if(e.target.name==='oldPrice' || e.target.name==='rate'){
      const price = parseFloat(finalData.oldPrice);
      const rate = parseFloat(finalData.rate);
      if(price >= 0 && (rate>=0 && rate<=100)){
      finalData.newPrice = Math.round(price - (price*rate/100))
      }else{
        finalData.newPrice = 'Not valid'
      }
    } 
    setInput(finalData);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const LocalData = JSON.parse(localStorage.getItem("ProductData")) || [];
    const UpdataLocalData = [{ ...input }, ...LocalData];
    localStorage.setItem("ProductData", JSON.stringify(UpdataLocalData));
    alert('Product added successfully')
    setInput({
      id: "",
      title: "",
      category: "",
      description: "",
      oldPrice: "",
      rate: "",
      newPrice: "",
      image: "",
    })
  };
  return (
    <>
      <div className="container py-3">
        <h5 className="bg-dark text-white p-3 text-center">Add Product</h5>

        <form className="pt-3" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-4">
              <input
                type="number"
                placeholder="Enter Product Id"
                className="form-control"
                name="id"
                value={input.id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-4">
              <select
                name="category"
                value={input.category}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="" hidden>--select Category</option>
                {categoryList.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                required
                value={input.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Description"
                className="form-control"
                name="description"
                required
                value={input.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="Old Price"
                className="form-control"
                name="oldPrice"
                required
                value={input.oldPrice}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="Discount (%)"
                className="form-control"
                name="rate"
                required
                value={input.rate}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="New Price"
                className="form-control"
                name="newPrice"
                value={input.newPrice}
                readOnly
              />
            </div>
            <div className="col-8">
              <input
                type="text"
                placeholder="Image URL"
                className="form-control"
                name="image"
                required
                value={input.image}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary w-100">
                Add Product
              </button>
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
