import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

import Hero from "./components/Hero";
import UpcomingPrograms from "./components/UpcomingPrograms";

const Home = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");
  
  return (
    <>
      <NavBar />
      <Hero isSmallScreen={isSmallScreen} />
      <UpcomingPrograms isSmallScreen={isSmallScreen} />
      <Footer />
    </>
  );
};

export default Home;
