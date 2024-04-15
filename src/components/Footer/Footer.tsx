import Grid from "@mui/material/Unstable_Grid2";
import { StyledUl, StyledHeading, StyledLi } from "./styles";

const Footer = () => {
  return (
    <Grid container sx={{ background: "#383A3C" }}>
      <Grid xs={12}>
        <StyledUl>
          <StyledHeading>© 2024 Big Sand Volleyball Winnipeg</StyledHeading>
        </StyledUl>
      </Grid>
    </Grid>
  );
};

export default Footer;
