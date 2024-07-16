import Grid from "@mui/material/Unstable_Grid2";
import "../styles.css";
import {
  SectionHeading,
  Subheading,
  InfoWrapper,
  InformationMessage,
} from "../styles";
import { COLORS } from "../../../constants";

const About = () => {
  return (
    <Grid container sx={{ background: COLORS.BACKGROUND_NEUTRAL }}>
      <Grid xs={1} md={2}></Grid>
      <Grid xs={10} md={8}>
        <InfoWrapper>
          <SectionHeading>About</SectionHeading>
          <Subheading>WHAT</Subheading>
          <InformationMessage>
            Running three sessions. You can sign up for as many as you'd like:
            <br />
            FULL <s>Session 1: August 12-16</s>
            <br />
            Session 2: August 19-23
            <br />
            Session 3: August 26-30
          </InformationMessage>
          <Subheading>WHO</Subheading>
          <InformationMessage>
            Girls ages 11-15. No prior volleyball experience needed. Will be
            covering basics for beginners while also acting as a refresher for
            those more experienced before the school season.
          </InformationMessage>
          <Subheading>WHERE</Subheading>
          <InformationMessage>
            Sturgeon Heights Community Centre
          </InformationMessage>
          <Subheading>WHEN</Subheading>
          <InformationMessage>M-F 3:00 - 5:00pm</InformationMessage>
          <Subheading>COST</Subheading>
          <InformationMessage>
            Cost $200/session (If you sign up for 2 sessions cost is $350)
          </InformationMessage>
          <Subheading>HOW</Subheading>
          <InformationMessage>
            Please have one team member fill out the form at the top of the
            page. Payment can be made by e-transfer, cash or cheque by end of
            August.
          </InformationMessage>
        </InfoWrapper>
      </Grid>
    </Grid>
  );
};

export default About;
