import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-black border-0 mx-3">
          <img
            className="card-img"
            src="./assets/main.png.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Welcome to our virtual marketplace, where shopping meets convenience, and every click opens the door to a world of endless possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
