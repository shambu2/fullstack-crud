import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="relative w-full h-full pt-4 bg-[url('/image1.png')] bg-cover bg-center">
      <div className="absolute min-h-[100vh] inset-0 bg-gradient-to-b from-blue-900/80 via-blue-600/60 to-blue-300/30 bg-opacity-30"></div>

      <div className="relative z-10">
        <Navbar />
        <div className="w-[70%] mx-auto flex justify-center  p-4 rounded-lg">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
