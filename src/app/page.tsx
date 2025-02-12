import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const HomePage = async() => {

  const session = await getServerSession(authOptions);


  return (


    <div >
      <Navbar session={session} />
      <div className="min-h-screen">
      <h1 className="text-4xl text-center">This is home page</h1>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
