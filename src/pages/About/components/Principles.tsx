import Grid from "@mui/material/Unstable_Grid2";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import "../styles.css";
import {
  SectionHeading,
  Subheading,
  InformationMessage,
} from "../styles";
import { COLORS } from "../../../constants";

const Principles = (): JSX.Element => {
  return (
    <Grid container sx={{ background: COLORS.BACKGROUND_NEUTRAL }}>
      <Grid xs={1} md={2}></Grid>
      <Grid xs={10} md={8}>
        <Grid container>
          <SectionHeading>Principles</SectionHeading>
          <Grid xs={10} md={4}>
            <HandshakeIcon sx={{ fontSize: 40, color: COLORS.DARKEST_GRAY }} />
            <Subheading>Respect</Subheading>
            <InformationMessage>
              We expect respect for coaches, teammates and self. We build
              confidence and develop social skills beneficial across all
              activities.
            </InformationMessage>
          </Grid>
          <Grid xs={10} md={4}>
            <SportsVolleyballIcon sx={{ fontSize: 40, color: COLORS.DARKEST_GRAY }} />
            <Subheading>Work Ethic</Subheading>
            <InformationMessage>
              We foster a culture of hard work. We understand that improvement
              takes time and the only way to improve is through practice.
            </InformationMessage>
          </Grid>
          <Grid xs={10} md={4}>
            <AutoAwesomeIcon sx={{ fontSize: 40, color: COLORS.DARKEST_GRAY }} />
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

export default Principles;
