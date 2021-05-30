import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <>
      <section
        // style={{ marginTop: "100px" }}
        className="container p-5 d-flex justify-content-start"
      >
        <div className="content">
          {/* <div className="logo-container"><img src={logo} alt="" /></div> */}
          <h2 className="text-white fw-bold fs-1 brand"><span className="text-warning">Awesome</span> Solutions</h2>
          <h2 className="text-white header-heading fw-bold">
            Easy To Work  , <span className="text-warning">Faster Service</span>
          </h2>
          <p className="text-white">
             We Professionals who understand that IT solutions services. And honestly all service Provide.<br/>Always We Ready Service Provide.
          </p>
          {/* <button
            className="btn me-4 header-button"
            style={{ color: "white", backgroundColor: "tomato" }}
          >
            More About Us
          </button> */}
          <button
            className="btn header-button"
            style={{ backgroundColor: "orange" }}
          >
            Our Special Services
          </button>
        </div>
      </section>
    </>
  );
};

export default HeaderMain;
