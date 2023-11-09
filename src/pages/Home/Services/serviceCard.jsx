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
        <p className="text-red-500">Price : ${price}</p>
        <button className="text-2xl text-red-500"><BsArrowRight></BsArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
