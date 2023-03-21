import React from "react";
import tent1 from "../../../assets/img/f-1.jpg";
import tent2 from "../../../assets/img/f-2.jpg";
import tent3 from "../../../assets/img/f-3.jpg";
import tent4 from "../../../assets/img/f-4.jpg";
import "./Tent.css";

const Tent = () => {
  return (
    <div className="mt-10">
      <div className="flex w-full items-center justify-center text-xl">
        <h1>01</h1>
        <hr className="bg-white w-16 mx-3" />
        <h1>Enjou Adventure</h1>
      </div>
      <h2 className="text-center text-3xl font-bold mt-2">
        Have A Fun With Our Amazing
      </h2>
      <h2 className="text-center text-4xl mt-2">Camping Ground</h2>
      <div className="grid md:grid-cols-4 gap-5 mt-5">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={tent1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title relative custom-title">Classic Tent</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">See More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={tent2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title relative custom-title">Luxury Tent</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">See More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={tent3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title relative custom-title">Cabin Trailer</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">See More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={tent4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title relative custom-title">Motorhome</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tent;
