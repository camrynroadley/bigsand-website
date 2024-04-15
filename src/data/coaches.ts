import { Coach } from "../models/types";

export const getCoachesData = (): Coach[] => [
  {
    firstName: "Peter",
    lastName: "Roadley",
    role: "Head Coach",
    bio: "",
    ranking: 0,
    picture: "/peter.png",
  },
  {
    firstName: "Ian",
    lastName: "Willows",
    role: "Assistant Coach",
    bio: "",
    ranking: 1,
  },
  {
    firstName: "Sam Miller",
    lastName: "",
    role: "Assistant Coach",
    bio: "",
    ranking: 2,
  },
  {
    firstName: "Erika Willows",
    lastName: "",
    role: "Assistant Coach",
    bio: "",
    ranking: 3,
  },
  {
    firstName: "Jenna Roadley",
    lastName: "",
    role: "Assistant Coach",
    bio: "",
    ranking: 4,
  },
  {
    firstName: "Camryn Roadley",
    lastName: "",
    role: "Assistant Coach",
    bio: "",
    ranking: 5,
  },
];
