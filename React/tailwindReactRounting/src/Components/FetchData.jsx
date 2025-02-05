import React from "react";
import useFetch from "./hooks/useFetch";

const FetchData = () => {
  const data = useFetch("https://dummyjson.com/products");
  // data.products?.length && data.products.map((item) => console.log(item));
  return (
    <>
      <table className="shadow-lg mx-auto mt-8 ">
        <thead>
          <tr className="border bg-slate-400">
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Warranty Information</th>
          </tr>
        </thead>
        <tbody>
        {data.products &&
        data.products.map((items) => (
          <tr key={items.id}>
            <td>{items.title}</td>
            <td>{items.category}</td>
            <td>{items.price}</td>
            <td>{items.rating}</td>
            <td>{items.warrantyInformation}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchData;
