import React from "react";

const ShowProducts = () => {
  const getData = JSON.parse(localStorage.getItem("ProductData")) || [];
  console.log('rendering')
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
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((product) => (
            <tr key={crypto.randomUUID()}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.title}</td>
              <td><s>{product.oldPrice}</s>
              <div>{product.newPrice}</div></td>
              <td>{product.rate}%</td>
              <td><img src={product.image} className="product-img" alt="product img" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ShowProducts;
