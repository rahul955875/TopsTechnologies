import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function CardData({ img, title }) {
  const icons = [faFacebookMessenger,faWhatsapp,faInstagram]
  return (
    <div className="col">
      <div className="shadow border">
        <img
          src={img}
          alt={title}
          className="w-100 object-fit-cover"
          style={{ height: 250 }}
        />
        <h3 className="p-2">
          {title} 
        </h3>
        <div className="icons d-flex gap-3 display-6 p-2">
        
        {/* <a className="btn btn-outline-primary fs-3" href="" ><FontAwesomeIcon icon={faFacebookMessenger} /></a>
        <a className="btn btn-outline-primary fs-3" href=""><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="btn btn-outline-primary fs-3" href=""><FontAwesomeIcon icon={faWhatsapp} /></a> */}
           {icons.map((item)=>{
            console.log(item.iconName)
            return <a onClick={()=>alert(`you clicked a ${item.iconName} button`)} className="btn btn-outline-primary fs-3" href=""><FontAwesomeIcon icon={item} /></a>
            
           })}
        </div>
      </div>
    </div>
  );
}

export default CardData;
