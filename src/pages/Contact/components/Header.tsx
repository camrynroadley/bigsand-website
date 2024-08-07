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
            <Heading>Contact</Heading>
          </HeadingWrapper>
          <InformationMessage>
            For any questions, please send us an email at: bigsandvolleyballwinnipeg@gmail.com
          </InformationMessage>
        </Grid>
        <Grid xs={1} md={2}></Grid>
      </Grid>
    );
  };

  export default Header;
