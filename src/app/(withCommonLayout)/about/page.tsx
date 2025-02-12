import { Metadata } from "next";
import React from "react";

export const metadata : Metadata= {
  title: "Md. Abdul Adud | About Us",
  description: "I am Md. Abdul Adud. &apos; I am from Rajshahi, Bangladesh. I have completed my Bsc graduation in CSE from Varendra University"
 };

const AboutUsPage = () => {
  return (
    <div className=" text-4xl text-black mt-10 space-y-4  ">
      <p>I am Md. Abdul Adud. I am from Rajshahi, Bangladesh.  I have completed my Bsc graduation in CSE from Varendra University.</p>
      <p>I have been very passionate about computers, programming since my university life. I have 5 years of experience in Web Development as a front-end and back-end developer. Knowledge of NodeJS, ReactJS, Redux and MongoDB.</p>
    </div>
  );
};

export default AboutUsPage;
