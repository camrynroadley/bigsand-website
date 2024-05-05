import { useLayoutEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import Stack from "@mui/material/Stack";
import { Coach, CoachCardProps } from "../../models/types";
import { getCoachesData } from "../../data/coaches";
import "./styles.css";
import {
  HeadingWrapper,
  Heading,
  SectionHeading,
  Subheading,
  InformationMessage,
  CoachesSubheading,
  CoachName,
  CoachRole,
  CoachBio,
  CoachesCardsWrapper,
} from "./styles";
import { BACKGROUND_NEUTRAL } from "../../constants";

const About = () => {
  const coaches: Coach[] = getCoachesData();
  const sortedCoaches: Coach[] = coaches.sort((coach1, coach2) => {
    return coach1.ranking - coach2.ranking;
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const onRegistrationFormClick = () => {
    console.log("On Registration Form Click");
  };

  const HeaderSection = (): JSX.Element => {
    return (
      <Grid container sx={{ background: "white", paddingBottom: "50px" }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <HeadingWrapper>
            <Heading>About</Heading>
          </HeadingWrapper>
          <InformationMessage>
            Big Sand Volleyball is a youth volleyball club serving Winnipeg and
            the surrounding communities. We provide young people with
            high-quality, accessible volleyball programs. Big Sand Volleyball
            promotes leadership, organizational, team and life skills in a fun
            competitive format for the benefit of its members.
          </InformationMessage>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    );
  };

  const PrinciplesSection = (): JSX.Element => {
    return (
      <Grid container sx={{ background: BACKGROUND_NEUTRAL }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <Grid container>
              <SectionHeading>Principles</SectionHeading>
              {/* <Stack direction="row" spacing={2}> */}
              <Grid xs={10} md={4}>
                <HandshakeIcon sx={{ fontSize: 40, color: "#383A3C" }} />
                <Subheading>Respect</Subheading>
                <InformationMessage>
                  We expect respect for coaches, teammates and self. We build
                  confidence and develop social skills beneficial across all
                  activities.
                </InformationMessage>
              </Grid>
              <Grid xs={10} md={4}>
                <SportsVolleyballIcon sx={{ fontSize: 40, color: "#383A3C" }} />
                <Subheading>Work Ethic</Subheading>
                <InformationMessage>
                  We foster a culture of hard work. We understand that
                  improvement takes time and the only way to improve is through
                  practice.
                </InformationMessage>
              </Grid>
              <Grid xs={10} md={4}>
                <AutoAwesomeIcon sx={{ fontSize: 40, color: "#383A3C" }} />
                <Subheading>Fun</Subheading>
                <InformationMessage>
                  We are active in a fun, social environment. We build lifelong
                  friendships and foster a love for the game of volleyball.
                </InformationMessage>
              </Grid>
              {/* </Stack> */}
          </Grid>
          <Grid xs={1} md={2}></Grid>
        </Grid>
      </Grid>
    );
  };

  const CoachesCard = ({
    firstName,
    lastName,
    role,
    bio,
    ranking,
    picture,
  }: CoachCardProps): JSX.Element => {
    return (
      <Card elevation={0} sx={{ borderRadius: 6, background: "#383A3C" }}>
        {/* <img width="100%" height="100%" src={`${picture}`} alt="Coach" /> */}
        <Container maxWidth="md" sx={{ paddingTop: "25px" }}>
          <Stack spacing={1}>
            <CoachName>{`${firstName} ${lastName}`}</CoachName>
            <CoachRole>{`${role}`}</CoachRole>
            <CoachBio>{`${bio}`}</CoachBio>
          </Stack>
        </Container>
      </Card>
    );
  };

  const CoachesSection = () => {
    return (
      <CoachesCardsWrapper>
        <CoachesSubheading>Current Coaches</CoachesSubheading>
        <Grid container spacing={2}>
          {sortedCoaches.map((coach: Coach) => (
            <Grid xs={12} md={4}>
              <CoachesCard
                firstName={coach.firstName}
                lastName={coach.lastName}
                role={coach.role}
                bio={coach.bio}
                ranking={coach.ranking}
                picture={coach.picture}
              />
            </Grid>
          ))}
        </Grid>
      </CoachesCardsWrapper>
    );
  };

  return (
    <>
      <NavBar />
      <HeaderSection />
      <PrinciplesSection />
      <CoachesSection />
      <Footer />
    </>
  );
};

export default About;
