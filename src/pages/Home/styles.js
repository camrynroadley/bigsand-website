import styled from 'styled-components'

const BigSandHeadingWrapper = styled.div`
  @media (min-width: 600px) {
    margin-top: 90px;
    margin-right: 80px;
    }
    @media (max-width: 600px) {
      margin-top: 60px;
      }
`;

const BigSandHeading = styled.h1`
color: #383A3C;
font-family: 'General Sans';
font-size: 24px;
font-weight: 500;
margin: 0;
@media (max-width: 80em) {
  font-size: 24px;
  }
`;

const HeadingWrapper = styled.div`
  @media (min-width: 600px) {
    margin-top: 10px;
    margin-right: 80px;
    }
    @media (max-width: 600px) {
      margin-top: 10px;
      }
`;

const Heading = styled.h1`
color: #383A3C;
font-family: 'General Sans';
font-size: 120px;
font-weight: 500;
margin: 0;
@media (max-width: 80em) {
  font-size: 70px;
  }
`;

const Heading2 = styled.h1`
color: #383A3C;
font-family: 'General Sans';
font-size: 120px;
font-weight: 500;
@media (min-width: 600px) {
  margin-top: -15px;
  }
@media (max-width: 80em) {
  font-size: 70px;
  }
`;

const Subheading = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 24px;
font-weight: 400;
`;

const SectionHeading = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 20px;
font-weight: 500;
padding: 0;
margin: 0;
`;

const ProgramTitle = styled.h3`
color: #383A3C;
font-family: 'General Sans';
font-size: 48px;
font-weight: 500;
`;

const ProgramDate = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 20px;
font-weight: 400;
`;

const ProgramDescription = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 20px;
font-weight: 400;
`;

const Spacer = styled.div`
margin-top: 30px;
`;

const LearnMoreButton = styled.div`
color: #930A0A;
font-family: 'General Sans';
font-size: 20px;
font-weight: 500;
width: 140px;
display: flex;
align-items: center;
flex-wrap: wrap;
text-decoration: none;
&:hover {
    cursor: pointer;
  }
`;

export { BigSandHeadingWrapper, BigSandHeading, HeadingWrapper, Heading, Heading2, Subheading, SectionHeading, ProgramTitle, ProgramDate, ProgramDescription, Spacer, LearnMoreButton };
