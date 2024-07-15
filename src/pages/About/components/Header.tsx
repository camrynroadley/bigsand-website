import Grid from "@mui/material/Unstable_Grid2";
import "../styles.css";
import {
  HeadingWrapper,
  Heading,
  InformationMessage,
} from "../styles";

const Header = (): JSX.Element => {
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

export default Header;
