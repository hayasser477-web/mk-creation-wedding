import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Home.css"
<Navbar className="css"></Navbar>

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;