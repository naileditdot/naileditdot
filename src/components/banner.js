import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Unique nail art is</span>
            </div>
            <div className='line'>
              <span>our excellence.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='http://wa.me/916350041360/'>
              Contact us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
