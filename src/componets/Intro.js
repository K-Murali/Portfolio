import React from "react";
import img1 from "../assets/profilepic.jpg";
import { SocialIcon } from "react-social-icons";
const Intro = () => {
  return (
    <>
      <div name='intro' className=" container mx-auto  items-center   justify-center pt-14  md:flex sm:flex-auto">
        <div className=" md:mt-28  mt-10 items-center  justify-between md:flex-row md:text-left text-center sm:w-full md:basis-1/2">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="   text-lg text-night"
          >
            Hello There! Welcome{" "}
          </h2>

          <h1
            data-aos="fade-left"
            data-aos-duration="1300"
            className=" pt-3 font-bold text-3xl"
          >
            I'm Muralidhar kala <br />
            Web Developer
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-duration="1200"
            className="  pt-2.5 text-lg text-night"
          >
            This is my personal Portfolio website you
            <br />
            can Know more about me dowm below .{" "}
          </h2>

          <div data-aos="fade-left" data-aos-duration="1200" className="mt-5">
            <a target='blank' href='https://drive.google.com/file/d/1f2NgdlGd5LPj3T7KIvscdbiWX5H7VJiA/view?usp=sharing' className="btn  bg-emerald-500 mt-4 mx-2 rounded-md normal-case text-white  btn-sm">
              Resume
            </a>

            <SocialIcon
              className="mx-2"
              style={{ width: "34px", height: "34px" }}
              url="https://instagram.com/murali._.ka/"
            />
            <SocialIcon
              className="mx-2"
              style={{ width: "34px", height: "34px" }}
              url="https://www.linkedin.com/in/muralidhar-k-79a7b7227/"
            />
            <SocialIcon
              className="mx-2"
              style={{ width: "34px", height: "34px" }}
              url="https://www.facebook.com/profile.php?id=100057321445061"
            />
          </div>
        </div>

        <div className="flex mt-10 md:mt-28 justify-center  ">
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            className="  w-80 h-80 rounded-full"
            src={img1}
            alt='profile'
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
