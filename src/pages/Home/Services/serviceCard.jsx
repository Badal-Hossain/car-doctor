/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
const ServiceCard = ({service}) => {
    const {img, title, price} = service
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="service"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
        <p style={{color:'#01A5C0'}} >Price : ${price}</p>
        <button style={{color:'#01A5C0'}} className="text-2xl text-info"><BsArrowRight></BsArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
