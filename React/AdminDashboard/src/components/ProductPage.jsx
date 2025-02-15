import React, { useState } from "react";
import { Link } from "react-router";

const ProductPage = () => {
  const [error, setError] = useState({});
  const categoryList = ["Cameras", "Mobiles", "Laptops", "Accesories"];
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
    const finalData = { ...input, [e.target.name]: e.target.value };
    if (e.target.name === "oldPrice" || e.target.name === "rate") {
      const price = parseFloat(finalData.oldPrice);
      const rate = parseFloat(finalData.rate);
      if (price >= 0 && rate >= 0 && rate <= 100) {
        finalData.newPrice = Math.round(price - (price * rate) / 100);
      } else {
        finalData.newPrice = "Not valid";
      }
    }
    setInput(finalData);
    setError({})
    
  };
  const validateConfing = {
    id: [
      { required: true, message: "Enter product id " },
      { minLength: 3, message: "id should be atleast 3 char long " },
    ],
    category: [{ required: true, message: "select category" }],
    title: [
      { required: true, message: "Enter Your product title " },
      { minLength: 3, message: "title should be atleast 3 char long " },
    ],
    description: [
      { required: true, message: "Enter Your product description " },
      { minLengthLong: 10, message: "description should be atleast 10 char long " },
    ],
    oldPrice: [{ required: true, message: "Enter your product price" }],
    rate: [{ required: true, message: "Discount if not enter 0" }],
    newPrice : [{required : false}],
    image: [{ required: true, message: "img url is compulsory" }],
  };
  const validateForm =(formdata)=>{
    const formErrors = {}
    Object.entries(formdata).forEach(([key,value]) =>{
     validateConfing[key].some((rule)=>{
      if(rule.required && !value){
        formErrors[key] = rule.message
        return true;
      }
      if(rule.minLength && !(value.length >= 3)){
        formErrors[key] = rule.message
        return true
      }
      if(rule.minLengthLong && !(value.length >= 10)){
        formErrors[key] = rule.message
        return true
      }
     })
    })
    setError(formErrors)
    console.log(formErrors)
    return formErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const FormInvalidFeilds =  validateForm(input)
    console.log(Object.keys(FormInvalidFeilds))
    if(Object.keys(FormInvalidFeilds).length) return;
    const LocalData = JSON.parse(localStorage.getItem("ProductData")) || [];
    const UpdataLocalData = [{ ...input }, ...LocalData];
    localStorage.setItem("ProductData", JSON.stringify(UpdataLocalData));
    alert("Product added successfully");
    setInput({
      id: "",
      title: "",
      category: "",
      description: "",
      oldPrice: "",
      rate: "",
      newPrice: "",
      image: "",
    });
  };
  return (
    <>
      <div className="container py-3">
        <h5 className="bg-dark text-white p-3 text-center">Add Product</h5>

        <form className="pt-3" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter Product Id"
                className="form-control"
                name="id"
                value={input.id}
                onChange={handleChange}
               
              />
              <p className="text-danger">{error.id}</p>
            </div>
            <div className="col-4">
              <select
                name="category"
                value={input.category}
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
                value={input.title}
                onChange={handleChange}
              />
              <p className="text-danger">{error.title}</p>
            </div>
            <div className="col-12">
              <textarea
                placeholder="Description"
                className="form-control"
                name="description"
                value={input.description}
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
                value={input.oldPrice}
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
                
                value={input.rate}
                onChange={handleChange}
              />
              <p className="text-danger">{error.rate}</p>
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
                
                value={input.image}
                onChange={handleChange}
              />
              <p className="text-danger">{error.image}</p>
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
