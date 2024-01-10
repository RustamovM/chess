import { useState } from "react";

import "./contact.css";
function Contact() {
  const [data, setData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const { name, number, email } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://v1.nocodeapi.com/mehriddin/google_sheets/rEVcthyMPcXgpisL?tabId=React",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, number, email]]),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="" id="contact">
      <div className="container mx-auto mt-10 ms-[900px]">
        <h3 className="font-bold text-2xl pb-5">Join Our Academy.</h3>
        <p className="w-96 text-[#444] pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          expedita similique perspiciatis. Saepe, voluptatibus totam.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="label-float">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="font-semibold text-sm"
                required
                onChange={handleChange}
                value={name}
              />
              <label className="font-bold ">Name</label>
            </div>
            <div className="label-float">
              <input
                type="number"
                placeholder="Tel:"
                name="Tel"
                className="font-semibold text-sm relative"
                required
                onChange={handleChange}
                value={number}
              />
              <label className="font-bold relative">Tel</label>
            </div>
            <div className="label-float">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="font-semibold text-sm relative"
                required
                onChange={handleChange}
                value={email}
              />
              <label className="font-bold relative">Email</label>
            </div>
          </div>
          <button
            className="btn py-2 px-10 rounded-lg bg-[#666] font-bold text-white hover:scale-95 duration-500	transition-all mt-5"
            onSubmit={(e) => Submit(e)}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
