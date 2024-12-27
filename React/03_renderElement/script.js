import { createRoot } from "react-dom/client";
import './style.css'

const card = (thumbnail,brand,price,title,i) => {
return(
<div className="card" key={i}>
    <img
      src={thumbnail}
      alt=""
    />
    <div className="card-body">
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  </div>)
};

const root = createRoot(document.querySelector("#root"));


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=> {

    ProductData = data.products
    console.log(ProductData)

    root.render(<div className="container">{ProductData.map((item,i)=>{
        const {thumbnail,brand,price,title} = item
        return card(thumbnail,brand,price,title,i)
    })}</div>);
});