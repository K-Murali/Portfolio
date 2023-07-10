import React from "react";

const Contactform = () => {
  return (
    <div  data-aos="fade-up" data-aos-duration='900' className="container mx-auto mb-32 mt-28 flex p-5 justify-center items-center">
      <div className="  border-2 md:w-6/12 rounded-lg sm:p-3  p-6 shadow-2xl">
        <h1 className=" text-center text-3xl mt-1 font-bold ">Contact me</h1>

        <form  name='contact'
          className="p-2 mt-3"
          action="https://getform.io/f/24c57569-929c-446e-a213-a72f80e31c41"
          method="POST"
        >
          <div className="relative !mb-4" data-te-input-wrapper-init>
            <label className=" font-semibold" for="exampleInput7">Name</label>
            <input
              type="text"
              className="w-full rounded bg-transparent border-2 mt-2 p-1"
              id="exampleInput7"
              name="name"
            />
          </div>

          <div className="relative  mb-4" data-te-input-wrapper-init>
            <label  className=" font-semibold"  for="exampleInput8">Email address</label>
            <input
              type="email"
              className="w-full rounded  bg-transparent border-2 mt-2 p-1"
              id="exampleInput8"
              name="mail"
            />
          </div>

          <div className="relative mb-3" data-te-input-wrapper-init>
            <label  className=" font-semibold"  for="exampleFormControlTextarea13">Message</label>
            <textarea
              className="w-full rounded bg-transparent border-2 mt-2 p-1"
              id="exampleFormControlTextarea13"
              rows="3"
               
              name="message"
              placeholder="Send your  message here..."
            ></textarea>
          </div>

          {/* <!--Checkbox--> */}
          <div className=" mt-4 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">


            <button
              type="submit"
              className="btn text-white btn-sm btn-success"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
