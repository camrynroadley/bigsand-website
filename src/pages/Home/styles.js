import styled from 'styled-components'

const HeadingWrapper = styled.div`
  margin-top: 140px;
  margin-right: 80px;
`;

const Heading = styled.h1`
color: #383A3C;
font-family: 'General Sans';
font-size: 100px;
font-weight: 500;
margin: 0;
`;

const Heading2 = styled.h1`
color: #383A3C;
font-family: 'General Sans';
font-size: 100px;
font-weight: 500;
margin-top: -15px;
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
font-size: 44px;
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
font-weight: 600;
width: 140px;
display: flex;
align-items: center;
flex-wrap: wrap;
&:hover {
    cursor: pointer;
  }
`;

export { HeadingWrapper, Heading, Heading2, Subheading, SectionHeading, ProgramTitle, ProgramDate, ProgramDescription, Spacer, LearnMoreButton };
