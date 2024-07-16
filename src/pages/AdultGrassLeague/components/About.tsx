import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
              Recreational and competitive women's adult grass league (outdoors)
            </InformationMessage>
            <Subheading>WHO</Subheading>
            <InformationMessage>
              Adult Women. Each team must register with 4-7 players on their
              roster. Games are played with 4 players on the court at a time
              (you may use subs or 4 only)
            </InformationMessage>
            <Subheading>WHERE</Subheading>
            <InformationMessage>
              Sturgeon Heights Community Centre. Games will be played outside on
              grass fields set up within the hockey rink. Indoor community
              centre access to bathrooms, water and change rooms.
            </InformationMessage>
            <Subheading>WHEN</Subheading>
            <InformationMessage>
              Monday nights for 10 weeks. Beginning May 27th - early August
              2024. Teams will play 2 games/night. Games will be played between
              6-10pm. In case of weather cancellations, games may be rescheduled
              to Thursday of the same week, or the league may be extended by a
              week. More details to follow.
            </InformationMessage>
            <Subheading>COST</Subheading>
            <InformationMessage>$500 per team</InformationMessage>
            <Subheading>HOW</Subheading>
            <InformationMessage>
              Please have all team members fill out the form at the top of the
              page. Please decide on team name and team captain as group and use
              those details during registration to link players together.
              Payment can be made by e-transfer, cash or cheque. More details to
              follow.
            </InformationMessage>
            <Subheading>WAIVER FORM</Subheading>
            <InformationMessage>
              A waiver form will be emailed to participants before the start of
              the league. All participants must print and sign the waiver form,
              and bring with them to the first game in order to play. More
              details to follow.
            </InformationMessage>
            <Subheading>RULES</Subheading>
            <Stack direction="row" spacing={2}>
              <InformationMessage>
                For more information and rules, please follow this link:
              </InformationMessage>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/16haK2HwjiM-NAjwvurYbz8ti2h6w1i-zbFBOHox9qFg/edit?usp=sharing"
              >
                <Button
                  sx={{
                    background: "transparent",
                    color: "#383A3C",
                    borderRadius: "15px",
                    border: "1px solid #383A3C",
                    padding: "0 15px 0 15px",
                    maxWidth: "300px",
                    fontSize: "20px",
                    fontFamily: "General Sans",
                    fontWeight: 400,
                    textTransform: "none",
                    ":hover": {
                      bgcolor: "#111213",
                      color: "white",
                    },
                  }}
                >
                  Rules
                </Button>
              </a>
            </Stack>
          </InfoWrapper>
        </Grid>
      </Grid>
    );
  };

  export default About;
