import styled from "styled-components";

const HeadingWrapper = styled.div`
  margin-top: 120px;
  margin-right: 80px;
`;

const Heading = styled.h1`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 100px;
  font-weight: 500;
  margin: 0;
`;

const Heading2 = styled.h1`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 100px;
  font-weight: 500;
  margin-top: -15px;
`;

const RegistrationBoxHeading = styled.h3`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const RegistrationBoxMessage = styled.p`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const SectionHeading = styled.p`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 44px;
  font-weight: 500;
  padding: 0;
`;

const Subheading = styled.p`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const InformationMessage = styled.p`
  color: #383a3c;
  font-family: "General Sans";
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 40px;
`;

const InfoWrapper = styled.div`
  margin-top: 50px;
`;

const CoachesSubheading = styled.p`
color: white;
font-family: "General Sans";
font-size: 44px;
font-weight: 500;
padding-bottom: 50px;
margin: 0;
`;

const CoachName = styled.h1`
  color: white;
  font-family: "General Sans";
  font-size: 32px;
  font-weight: 500;
`;

const CoachRole = styled.p`
  color: white;
  font-family: "General Sans";
  font-size: 26px;
  font-weight: 400;
  margin: 0;
`;

const CoachBio = styled.p`
  color: #e4e4e4;
  font-family: "General Sans";
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 40px;
`;

const CoachesCardsWrapper = styled.div`
  background-color: #5d6063;
  padding-left: 16%;
  padding-right: 16%;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (max-width: 80em) {
    padding-left: 10%;
    padding-right: 10%;
    }
`;

export {
  HeadingWrapper,
  Heading,
  Heading2,
  RegistrationBoxHeading,
  RegistrationBoxMessage,
  SectionHeading,
  Subheading,
  InfoWrapper,
  InformationMessage,
  CoachesSubheading,
  CoachName,
  CoachRole,
  CoachBio,
  CoachesCardsWrapper,
};
