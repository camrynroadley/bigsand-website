import styled from 'styled-components'

const HeadingWrapper = styled.div`
  @media (min-width: 600px) {
    margin-top: 120px;
    margin-right: 80px;
    }
    @media (max-width: 600px) {
      margin-top: 60px;
      }
`;

const Heading = styled.h1`
color: #383A3C;
font-family: 'General Sans';
@media (min-width: 600px) {
  font-size: 66px;
  }
  @media (max-width: 600px) {
    font-size: 50px;
    }
font-weight: 500;
margin: 0;
`;

const Heading2 = styled.h1`
color: #383A3C;
font-family: 'General Sans';
@media (min-width: 600px) {
  font-size: 66px;
  }
  @media (max-width: 600px) {
    font-size: 50px;
    }
font-weight: 500;
margin-top: -15px;
`;

const RegistrationBoxHeading = styled.h3`
color: #383A3C;
font-family: 'General Sans';
font-size: 24px;
font-weight: 500;
margin: 0;
`;

const RegistrationBoxMessage = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 24px;
font-weight: 400;
margin: 0;
padding-top: 15px;
padding-bottom: 15px;
`;

const SectionHeading = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 44px;
font-weight: 500;
padding: 0;
`;

const FAQSectionHeading = styled.p`
color: white;
font-family: 'General Sans';
font-size: 44px;
font-weight: 500;
padding: 0;
`;

const Subheading = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 20px;
font-weight: 600;
margin: 0;
`;

const InformationMessage = styled.p`
color: #383A3C;
font-family: 'General Sans';
font-size: 24px;
font-weight: 400;
margin: 0;
padding-bottom: 40px;
`;

const InfoWrapper = styled.div`
  margin-top: 50px;
`;

export { HeadingWrapper, Heading, Heading2, FAQSectionHeading, RegistrationBoxHeading, RegistrationBoxMessage, SectionHeading, Subheading, InfoWrapper, InformationMessage };
