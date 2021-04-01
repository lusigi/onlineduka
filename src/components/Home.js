import React from "react";
import "./Home.css";
import banner from "../images/banner.jpg";
import Product from "./Product";
import nike from "../images/nike.png";
function Home() {
  return (
    <div className="home">
      <img src={banner} className="home__image" />
      <div className="home__row">
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Nike Shoes"
          price={11.96}
          rating={5}
          image={nike}
        />
      </div>
    </div>
  );
}

export default Home;
