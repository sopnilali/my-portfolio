import { Metadata } from "next";
import React from "react";

export const metadata : Metadata= {
  title: "About Us | Md. Abdul Adud",
  description: "I am Md. Abdul Adud. I am from Rajshahi, Bangladesh. I have completed my Bsc graduation in CSE from Varendra University"
 };

const AboutUsPage = () => {
  return (
    <div className=" text-base text-black mt-10 space-y-4  ">
      <h1 className="text-3xl font-bold px-2 text-center">About Us</h1>
      <p className="text-justify px-2">I am Md. Abdul Adud. I am from Rajshahi, Bangladesh.  I have completed my Bsc graduation in CSE from Varendra University. I have been very passionate about computers, programming since my university life. I have 5 years of experience in Web Development as a front-end and back-end developer. Knowledge of NodeJS, ReactJS, Redux and MongoDB.</p>
    </div>
  );
};

export default AboutUsPage;
