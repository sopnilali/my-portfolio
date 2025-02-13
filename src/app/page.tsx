import Projects from "@/components/Projects/Projects";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const HomePage = async() => {

  const session = await getServerSession(authOptions);


  return (


    <div >
      <Navbar session={session} />
      <div className="min-h-screen">
         <HeroSection/>
       <hr />
       <Projects/>
        <hr />
        <Skills/>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
