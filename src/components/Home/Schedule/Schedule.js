import React from "react";
import pic from "../../../images/2.jpg";

const Schedule = () => {
  return (
    <section id="about" className="mt-5 mb-5">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={pic}
            style={{ height: "400px", width: "90%", borderRadius: "10px", border: "1px solid orange"}}
            className="mb-5"
            alt=""
          />
        </div>
        <div className="col-md-6 p-4">
          {/* <p>We promised Best Service Provide Better Improved</p> */}
          <h2><span className="text-danger">Your Company Best Security</span> <span className="text-success">And </span><span className="text-warning">Safety Priority</span></h2>
          <div
            className=""
            // style={{
            //   width: "90%",
            //   marginLeft: "5%",
            //   borderLeft: "1px solid orange",
            //   padding: "5px",
            //   paddingLeft: "5%",
            // }}
          >
            {/* <h5>
              As one of the world's largest ITService Providers, our deep pool
              of over 130 certified engineers and IT support staff are ready to
              help.
            </h5> */}
            <br />
            <p>
              Provide client with appropriate view and access permissions to
               problems, contracts, assets, solutions, &&
              reports with our professionals Job.
            </p>
          </div>
          <br />
          <div style={{ marginLeft: "5%" }} className="btn btn-outline-warning">
          <span className="text-danger"> Connect Our Team</span>
          </div>
          {/* <div style={{ marginLeft: "5%" }} className="mt-3">
            <p className="text-secondary">
              Delivered in more than 450,000 client’s interactions
            </p>
            <p className="text-secondary">
              Provided by experts to help challenge critical activities
            </p>
            <p className="text-secondary">
              Complemented with peer perspectives and advice
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
