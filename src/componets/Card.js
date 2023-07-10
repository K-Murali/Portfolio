import React from "react";
import Modal from "./Modal";

const Card = (props) => {
  return (
    <div >
      <div
      
        data-aos="fade-up"
        data-aos-duration="1600"
        className=" border card mt-4 p-2 w-80 bg-base-100 shadow-xl"
      >
        <figure>
          <img className=" mt-2  w-40 h-40" src={props.img} alt="Shoes" />
        </figure>
        <div className="card-body p-0 mt-4">
          <h2 className="card-title justify-center">
            <div className={` p-3 text-white badge badge-primary `}>
              {" "}
              {props.title}
            </div>
          </h2>
          <p className="mt-3 text-center">{props.info}</p>
          <div className="card-actions mt-3 mb-4 justify-center">
            <a
              target="blank"
              href={props.gitlink}
              className=" p-3 font-semibold badge badge-secondary text-white"
            >
              Git Link
            </a>
            <Modal id={props.id} more={props.more} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
