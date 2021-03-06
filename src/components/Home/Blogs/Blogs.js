import React from "react";
import cloudComputing from "../../../images/1.jpg";
import httpOrHttps from "../../../images/3.jpg";
import passwordSafe from "../../../images/4.jpg";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Ways to keep your password safe",
      description:
        "You must be having some basic knowledge on how, you can keep your password safe, secure and protected. Like, you must keep a long password with the maximum number of characters, using numbers and symbols etc. Still, there are some common pitfalls, that anybody with passwords should avoid keeping their password safe.",
      img: passwordSafe,
    },
    {
      id: 2,
      title: "What you need to use http or https",
      description:
        "The HTTPS is better than HTTP because it provides security. Sometimes our website does not contain an e-commerce page that requires sensitive data; in that case, we can switch to the HTTP protocol. Despite the security, HTTPS also provides SEO. So, we do need to put more effort into boosting our SEO.",
      img: httpOrHttps,
    },
    {
      id: 3,
      title: "Cloud computing advantages",
      description:
        "Cloud computing operates on a similar principle as web-based email clients, allowing users to access all of the features and files of the system without having to keep the bulk of that system on their own computers. Most people already use a variety of cloud computing services without even realizing it. Gmail, Google Drive, and even Facebook .",
      img: cloudComputing,
    },
  ];
  return (
    <section>
      <div className="container my-5">
        <h2 className="text-brand text-center my-5">
          <span className="text-danger">You can explore</span><span className="text-success">your knowledge <br /> with our</span> <span className="text-warning"> awesome blogs</span>
        </h2>
        <div className="row">
          {blogData.map((blog) => (
            <div className="col-md-4">
              <div
                style={{ height: "550px" }}
                className="shadow p-3 mb-5 bg-white rounded"
              >
                <img src={blog.img} alt="" style={{ width: "100%", height:"185px",borderRadius: "10px" }} />
                <h4 className="text-brand my-3">{blog.title}</h4>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
