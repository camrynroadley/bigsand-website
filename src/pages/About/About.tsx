import { useLayoutEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Coach } from "../../models/types";
import { getCoachesData } from "../../data/coaches";
import "./styles.css";
import Header from './components/Header';
import Principles from './components/Principles';
import Coaches from './components/Coaches';

const About = () => {
  const coaches: Coach[] = getCoachesData();
  const sortedCoaches: Coach[] = coaches.sort((coach1, coach2) => {
    return coach1.ranking - coach2.ranking;
  });

  // Land at the top of the page when returning from different page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <Header />
      <Principles />
      <Coaches sortedCoaches={sortedCoaches} />
      <Footer />
    </>
  );
};

export default About;
