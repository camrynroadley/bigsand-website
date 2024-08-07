import { useLayoutEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import FAQ from "./components/FAQ";

const SummerCamp = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  const onRegistrationFormClick = () => {
    console.log("On Registration Form Click");
  };

  return (
    <>
      <NavBar />
      <Header isSmallScreen={isSmallScreen} onRegistrationFormClick={onRegistrationFormClick} />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default SummerCamp;
